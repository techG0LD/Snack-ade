import Catalog from "../Catalog"
import MyBanner from "../HBanner"




function Home() {
    return (
        <div>
            <div className="home">
                <h1 className="">Donating made sweet & simple</h1>
                <MyBanner/>
                <h2>This Month's Best Sellers</h2>
                <Catalog/>
               
               <br></br>
            </div>
        </div>
    )
}

export default Home