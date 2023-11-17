import Catalog from "../Catalog"
import MyBanner from "../HBanner"
import { Link } from "react-router-dom";



function Home() {
    return (
        <div>
            <div>
                <h1 className="center-title">Donating made sweet & simple</h1>
                <div className="sub-home">
                    <MyBanner/>
                </div>
                
               
                    <h2 className="center-title">This Month's Best Sellers</h2>
                    <Catalog/>
                    <div >
                        <h2 className="center-title">Mission Statement</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo vitae magna consequat euismod. Fusce id nisi auctor, aliquet nisl at, lacinia augue. Quisque euismod semper lacus, quis tincidunt eros ullamcorper quis. Morbi auctor, nunc quis consequat sagittis, felis nisl vulputate nibh, quis ultrices sapien nisl ac erat. Curabitur quis nisl quis lorem fringilla commodo. Cras vitae nisi ut augue mattis interdum. Mauris quis lacus id leo malesuada mattis. Nunc vitae neque quis massa lobortis blandit. In hac habitasse platea dictumst.
                            Suspendisse potenti. Vivamus quis nisl sit amet nisl tincidunt consequat. Phasellus quis lorem sed lorem condimentum tincidunt. Proin quis nisl quis lorem sagittis sollicitudin. Sed at nisl quis lorem fermentum luctus. Donec quis nisl quis lorem consequat tincidunt. Nulla quis nisl quis lorem sagittis sollicitudin. Sed at nisl quis lorem fermentum luctus. Donec quis nisl quis lorem consequat tincidunt. Nulla quis nisl quis lorem sagittis sollicitudin. Sed at nisl quis lorem fermentum luctus.
                            </p>
                        <p className="center-title">Become a member today, <Link className="sign-up"  to="/sign-up">Sign Up</Link></p>
                    </div>
                    
               
              
            </div>
            <br></br>
            <br></br>
        </div>
    )
}

export default Home