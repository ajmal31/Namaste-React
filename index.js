/**
 * <div id="parent">
 * 
 *    <div id="child" >
 *        
 *        <h1> helo i'm h1 </h1>
 *    </div    
 * 
 * </div>
 */
const heading = React.createElement("h1", {
    id: "123", className: "helo"
}, "helo ajmal")

const parent=React.createElement("div",{id:"parent"},[

    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"helo i'm h1 tag of child 1"),
        React.createElement("h2",{},"helo i'm h2 tag of child 1")]
    ),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"helo i'm h1 tag of child2"),
        React.createElement("h2",{},"helo i'm h2 tag of child 2")]
    ),

]
)

//writing like this react make more hard so here is come JSX

/**
 * JSx
 * ------
 * HTML kind of syntax make more easy to write to React code
 * 
 */
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)
