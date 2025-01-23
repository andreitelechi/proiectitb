module 0x0::example {
    use sui::object::{UID}; 
    use sui::transfer; 
    use sui::tx_context::TxContext; 
    use sui::object::new;

    // Struct definitions
    public struct Sword has key, store {
        id: UID,
        magic: u64,
        strength: u64,
    }

    public struct Forge has key {
        id: UID,
        swords_created: u64,
    }

    // Module initializer
    fun init(ctx: &mut TxContext) {
        let admin = Forge {
            id: new(ctx), // Use sui::object::new
            swords_created: 0,
        };
        transfer::transfer(admin, ctx.sender());
    }

    // Accessors
    public fun magic(self: &Sword): u64 {
        self.magic
    }

    public fun strength(self: &Sword): u64 {
        self.strength
    }

    public fun swords_created(self: &Forge): u64 {
        self.swords_created
    }

    // Test function
    #[test]
    fun test_module_init() {
        // Create test addresses representing users
        let admin = @0xAD;
        let initial_owner = @0xCAFE;

        // First transaction to emulate module initialization
        let mut scenario = test_scenario::begin(admin);
        {
            init(scenario.ctx());
        };

        // Second transaction to check if the forge has been created
        // and has initial value of zero swords created
        scenario.next_tx(admin);
        {
            // Extract the Forge object
            let forge = scenario.take_from_sender<Forge>();
            // Verify number of created swords
            assert!(forge.swords_created() == 0, 1);
            // Return the Forge object to the object pool
            scenario.return_to_sender(forge);
        };

        // Third transaction executed by admin to create the sword
        scenario.next_tx(admin);
        {
            let mut forge = scenario.take_from_sender<Forge>();
            // Create the sword and transfer it to the initial owner
            let sword = forge.new_sword(42, 7, scenario.ctx());
            transfer::public_transfer(sword, initial_owner);
            scenario.return_to_sender(forge);
        };
        scenario.end();
    }
}
