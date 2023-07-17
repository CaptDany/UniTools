export default function TopBar(props) {
    const isSubpage = props.subpage;
    const subpageName = props.subpageName;
    const subpageClass = props.subpageClass;

    if (isSubpage === true){
        return(
            <div className="topbar">
                <div className="topleft">
                    <i className={subpageClass} style={{color: "#454545", alignItems:"center"}}></i>
                    <p style={{margin:"10px"}}>{subpageName}</p>
                </div>
    
                <div className="topright">
                    <a className="top-bar-links" href="/UniTools">🏴‍☠️ Uni Tools</a>
                </div>
            </div>
        )
    }
    else{
        return(
        <div className="topbarcenter">
            <div className="topcenter">
                <a className="top-bar-links" href="/UniTools">🏴‍☠️ Uni Tools</a>
            </div>
        </div>
        )
    }
}