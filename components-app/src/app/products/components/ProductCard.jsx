export default function ProductCard(props){
    return <div style={{border:"1px solid gray",padding:"10px"}}>
        <h3>{props.name}</h3>
        <p>Price: ${props.price}</p>
    </div>
}