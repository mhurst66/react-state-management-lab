
const FighterCard = (props) => {
    const { fighter } = props
    return (
        <>
            <li>
                <img src={fighter.img} alt={fighter.name} />
                <p>{fighter.name}</p>
                <p>{fighter.price}</p>
                <p>{fighter.strength}</p>
                <p>{fighter.agility}</p>
                <button onClick={() => handleAddFighter()}>Add</button>
            </li>
        </>
    )
}
  
export default FighterCard