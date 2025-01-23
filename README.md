# Proiect: Integrarea Blockchain-urilor Ethereum și Sui pentru Transferul Token-urilor IBT

## Descriere
Acest proiect implementează o aplicație web care permite utilizatorilor să autentifice portofelele lor cripto și să transfere token-urile IBT între două blockchain-uri locale: **Ethereum** și **Sui** (nu am reusit).

Token-ul **IBT** este un token care poate fi mint-uit (creat) și ars exclusiv de către deținătorul contractului, conform cerințelor specificate.

## Cerințe îndeplinite
- **Crearea a două contracte inteligente**:
  - Un contract inteligent implementat pe blockchain-ul Ethereum.
  - Un contract inteligent implementat pe blockchain-ul Sui.
- **Autentificare cu portofele cripto**:
  - Implementare pentru conectarea la portofelul MetaMask pentru blockchain-ul Ethereum.
- **Aplicație web funcțională**:
  - Posibilitatea de a alege cantitatea de token-uri IBT ce vor fi transferate.
  - Transferul IBT între lanțurile Ethereum și Sui:
    - Token-urile sunt **arse** pe lanțul sursă.
    - Token-urile sunt **mint-uite** pe lanțul destinație.

## Limitări
Din păcate, nu am reușit să implementez conectarea completă la **Sui Wallet**, deși codul include logica necesară pentru această funcționalitate. Problema este legată de detectarea portofelului Sui pe interfața web. Restul cerințelor sunt funcționale.

## Tehnologii utilizate
- **Blockchain**:
  - Ethereum: folosind MetaMask pentru autentificare.
  - Sui: folosind `sui-client` pentru gestionarea blockchain-ului local.
- **Frontend**:
  - HTML, CSS și JavaScript pentru interfața web.
  - `live-server` pentru a servi aplicația web.
- **Smart Contracts**:
  - Solidity pentru contractele Ethereum.
  - Move pentru contractele Sui.

## Probleme cunoscute
- Conectarea la **Sui Wallet** nu funcționează corect.

