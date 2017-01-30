var div = React.DOM.div;
var h1 = React.DOM.h1;


//creates a new type of element that can be used over again. We will only create this once
//known as a composite component. It is a component of our own creation.
var MyTitle = React.createClass({
    render() {
        return (
                div (null,
                     h1(null, 'Check this out!')
                     )
                )
    }
})

//createElement is one specific instance of the class. Can be written multiple times.
//Reason for encircling div: You can't have MyFirstComponent be equal to several different elements. It has to equal one thing. It can be one element with many chidren.
//Analogy: We cannot have x = 1, 2, 3, 4,5. We can have x = [1,2,3,4,5]
var MyFirstComponent = (
    div(null,
        React.createElement(MyTitle, null),
        React.createElement(MyTitle, null),
        React.createElement(MyTitle, null),
        React.createElement(MyTitle, null)
    )
);

ReactDOM.render(MyFirstComponent, document.getElementById('app'));
