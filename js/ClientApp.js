var div = React.DOM.div;
var h1 = React.DOM.h1;


//all components in React must have a render function, which must return a component.
// if you comment out the return and check out the page, you will see:
    //ReactCompositeComponent.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.
var MyTitle = React.createClass({
    render() {
        return (
                div (null,
                     //props: short for properties.
                     h1(null, this.props.title)
                     )
                )
    }
})


//methods for cleaner code
var MyTitleFactory = React.createFactory(MyTitle)
ce = React.createElement


var MyFirstComponent = (
    div(null,
        // MyTitleFactory, React.createElement(MyTitle, null), and ce(MyTitle, null) all achieve the same thing
        MyTitleFactory({title: 'Hello'}),
        React.createElement(MyTitle, {title: 'World'}),
        ce(MyTitle, {title: '!'})
    )
);

ReactDOM.render(MyFirstComponent, document.getElementById('app'));
