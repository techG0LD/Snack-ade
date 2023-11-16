import Catalog from "../Catalog"
import MyBanner from "../HBanner"




function SnackIndex() {
    return (
        <div>
            <div className="home">
                <h1 className="">Donating made sweet & simple</h1>
                <MyBanner/>
               
                    <h2>This Month's Best Sellers</h2>
                    <Catalog/>
                     
                    <h2>Mission Statement</h2>
                
               
              
            </div>
        </div>
    )
}

export default SnackIndex