function solve() {
    let object = {};
    object.mage = (name) => {
        let mage = {
            name,
            health: 100,
            mana: 100,
            cast: (castName) => {
                mage.mana--;
                console.log(`${name} cast ${castName}`)
            }
        };
        return mage;
    }

    object.fighter = (name) => {
        let fighter = {
            name,
            health: 100,
            stamina: 100,
            fight: () => {
                console.log(`${name} slashes at the foe!`)
                fighter.stamina--;
            }
        }
        return fighter;
    }

    return object;
}