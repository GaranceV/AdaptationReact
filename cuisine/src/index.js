/**
 * Created by sonia on 16/10/15.
 */
var Content = React.createClass({
    render: function () {
        return (
            <div className = "content">
                <h1>Muffin</h1>
                <Table />
                <EtapeDeux/>
                
            </div>
        );
    }
});


var Table = React.createClass({
    render: function () {
        return (
            <div className="table">
                <table>
                    <caption>Ingredients</caption>
                    <thead><tr>
                        <th>Nom</th>
                        <th>Quantité</th>
                    </tr></thead>
                    <tbody><tr>
                        <td>beurre</td>
                        <td>120g</td>
                    </tr>
                    <tr>
                        <td>chocolat</td>
                        <td>200g</td>
                    </tr>
                    <tr>
                        <td>sucre</td>
                        <td>100g</td>
                    </tr></tbody>
                </table>
            </div>
        );
    }
});

var EtapeUn = React.createClass({
    getInitialState : function(){
        // état initial
        return {
            hidden : false
        }
    },
    getDefaultProps : function(){
        // si `this.props.label` n'est pas présent, ce sera `"?"`
        return {
            hidden : "?"
        }
    },
    render:function (){
        return (
            <div className = "etapeUn">
                <p>Faire fondre beurre et chocolat</p>
                <table>
                    <thead><tr>
                        <th>Ingredients utile pour l'étape</th>
                    </tr></thead>
                    <tbody><tr>
                        <td>beurre</td>
                    </tr>
                    <tr>
                        <td>chocolat</td>
                    </tr></tbody>
                </table>
                <img src="../assets/images/sampleEmbeded.png" alt="embededVid"/>
            </div>
        );
    }
});

var EtapeDeux = React.createClass({
    render:function (){
        return (
            <div className = "etapeDeux">
                <p>Mélanger avec le sucre</p>
                <table>
                    <thead><tr>
                        <th>Ingredients utile pour l'étape</th>
                    </tr></thead>
                    <tbody><tr>
                        <td>beurre</td>
                    </tr>
                    <tr>
                        <td>chocolat</td>
                    </tr>
                    <tr>
                        <td>sucre</td>
                    </tr></tbody>
                </table>
                <img src="../assets/images/sampleEmbeded.png" alt="embededVid"/>
            </div>
        );
    }
});

var ButtonNext = React.createClass({
    render:function(){
        return (
            <button type="button" className="buttonNext">Next</button>
        );
    }
});

var ButtonPrevious = React.createClass({
    render:function(){
        return (
            <button type="button" className="buttonPrevious">Previous</button>
        );
    }
});

var LikeButton = React.createClass({
    getInitialState: function() {
        return {liked: false};
    },
    handleClick: function(event) {
        this.setState({liked: !this.state.liked});
    },
    render: function() {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <p onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </p>
        );
    }
});

 var tabIngredients1=<table>
                         <thead><tr>
                             <th>Ingredients utile pour l'étape</th>
                         </tr></thead>
                         <tbody><tr>
                             <td>beurre</td>
                         </tr>
                         <tr>
                             <td>chocolat</td>
                         </tr></tbody>
                     </table>;

var tabIngredients2=<table>
                        <thead><tr>
                            <th>Ingredients utile pour l'étape</th>
                        </tr></thead>
                        <tbody><tr>
                            <td>beurre</td>
                        </tr>
                        <tr>
                            <td>chocolat</td>
                        </tr>
                        <tr>
                            <td>sucre</td>
                        </tr></tbody>
                    </table>;
//****************************Carousel**************************//
// Dataset
var data = [
    {
        id         : "slide1",
        imagePath  : "../assets/images/sampleEmbeded.png",
        imageAlt   : "embededVid",
        title      : "Etape 1",
        subtitle   : "Faire fondre beurre et chocolat",
        text       : tabIngredients1,
        action     : "Slide 1 Image Action",
        actionHref : "href"
    },
    {
        id         : "slide2",
        imagePath  : "../assets/images/sampleEmbeded.png",
        imageAlt   : "embededVid",
        title      : "Etape 2",
        subtitle   : "Mélanger avec le sucre",
        text       : tabIngredients2,
        action     : "Slide 2 Image Action",
        actionHref : "href"
    },
];

// App state
var state = {
    currentSlide: 0,
    data        : data
};

// Slideshow Component
var Slideshow = React.createClass({
    render: function() {
        return (
            <div className="slideshow">
                <Slides data={this.props.data} />
                <Controls />
            </div>
        );
    }
});

// Slides
var Slides = React.createClass({
    render: function() {
        var slidesNodes = this.props.data.map(function (slideNode, index) {
            var isActive = state.currentSlide === index;
            return (
                <Slide active={isActive} key={slideNode.id} imagePath={slideNode.imagePath} imageAlt={slideNode.imageAlt} title={slideNode.title} subtitle={slideNode.subtitle} text={slideNode.text} action={slideNode.action} actionHref={slideNode.actionHref} />
            );
        });
        return (
            <div className="slides">
                {slidesNodes}
            </div>
        );
    }
});

// Single Slide
var Slide = React.createClass({
    render: function() {
        var classes = React.addons.classSet({
            'slide': true,
            'slide--active': this.props.active
        });
        return (
            <div className={classes}>
                <h2>{this.props.title}</h2>
                <h3>{this.props.subtitle}</h3>
                <p>{this.props.text}</p>
                <img src={this.props.imagePath} alt={this.props.imageAlt} />
                <a href={this.props.actionHref}>{this.props.action}</a>
            </div>
        );
    }
});

// Prev and Next buttons
var Controls = React.createClass({
    togglePrev: function() {
        actions.togglePrev();
    },
    toggleNext: function() {
        actions.toggleNext();
    },
    render: function() {
        return (
            <div className="controls">
                <div className="toggle toggle--prev" onClick={this.togglePrev}>Prev</div>
                <div className="toggle toggle--next" onClick={this.toggleNext}>Next</div>
            </div>
        );
    }
});

// State transitions
var actions = {
    toggleNext: function() {
        console.log("something worked");
        var current = state.currentSlide;
        var next = current + 1;
        if (next > state.data.length - 1) {
            next = 0;
        }
        state.currentSlide = next;
        render(state)
    },
    togglePrev: function() {
        console.log("something worked");
        var current = state.currentSlide;
        var prev = current - 1;
        if (prev < 0) {
            prev = state.data.length - 1;
        }
        state.currentSlide = prev;
        render(state);
    },
    toggleSlide: function(id) {
        console.log("something worked");
        var index = state.data.map(function (el) {
            return (
                el.id
            );
        });
        var currentIndex = index.indexOf(id);
        state.currentSlide = currentIndex;
        render(state);
    }
};

// Render
/*function render(state) {
    React.render(
        <Slideshow data={state.data} />,
        document.getElementById('recette')
    );
}

render(state);*/

ReactDOM.render(
    <Content />,
    document.getElementById("recette")
);