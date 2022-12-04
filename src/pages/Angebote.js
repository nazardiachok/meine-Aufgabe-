import styled from "styled-components";

function Angebote({objects}) {
    return ( 
        <Page>
            <Info>Angebote:</Info>

            <div>
                {objects.map(item=>
                <BoxItem>
                    <Item>Produktname: <span>{item.prod}</span></Item>
                    <Item>Preis: <span>{item.promotionPrice === 0 ? item.price : item.promotionPrice} $, {item.promotionPrice ? "(das ist promotion Preis)" : ""}</span></Item>
                    <Item>Speichergrösse: <span>{item.ram}</span></Item>
                    <Item>Handy-Type: <span>{item.type}</span></Item>
                    <Item>Farbe: <span>{item.color}</span></Item>
                </BoxItem>
                    )
                }
            </div>
        </Page>
     );
}

export default Angebote;

const Page=styled.div`
bottom:0px;
left:0px;
top:0px;`

const Info=styled.p`
font-size:18px;
font-weight:bold;`

const BoxItem=styled.li`
display: flex;
flex-direction: column;
padding:10px 30px;
width: 500px;
height :150px;
list-style:none;
border:1px solid black;
border-radius: 10px;
margin:10px auto;`


const Item=styled.p`
font-size:14px;
font-weight:bold;
margin: 5px;
text-align: left;
 span{
    font-weight: 400;
 }
`
