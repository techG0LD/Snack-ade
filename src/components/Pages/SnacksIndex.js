import Catalog from "../Catalog"
import Coco_log from "../CocoLog"
import HC_log from "../HCLog"
import BG_log from "../BGLog"
import NS_log from "../NSLog"




function SnackIndex() {
    return (

        
        <div>
            <div className="">
                <h1 className="">Snack Catalog</h1>
                <h2>New Snacks</h2>
                <NS_log/>
                <div className="sub-home">
                <h2>Chocolates</h2>
                <Coco_log/>
                <a className="view-all" href="#">view chocolates</a>
                </div>
                <div>
                    <h2>Hard Candy</h2>
                    <HC_log/>
                    <a className="view-all" href="#">view candies</a>
                </div>
                <div className="sub-home">
                    <h2>Baked Goods</h2>
                    <BG_log/>
                    <a className="view-all" href="#">view baked goods</a>
                </div>
                
                <h2>This Month's Best Sellers</h2>
                <Catalog/>

                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default SnackIndex