/**
 * Created by sonia on 16/10/15.
 */
var Content = React.createClass({
    render: function () {
        return (
            <div className = "content">
                <h1>Muffin</h1>
                <Table />
                <EtapeUn />
                <ButtonNext />
                <EtapeDeux />
                <ButtonPrevious />
                <LikeButton />
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
                    <tr>
                        <th>Nom</th>
                        <th>Quantité</th>
                    </tr>
                    <tr>
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
                    </tr>
                </table>
            </div>
        );
    }
});

var EtapeUn = React.createClass({
    render:function (){
        return (
            <div className = "etapeUn">
                <p>Faire fondre beurre et chocolat</p>
                <table>
                    <tr>
                        <th>Ingredients utile pour l'étape</th>
                    </tr>
                    <tr>
                        <td>beurre</td>
                    </tr>
                    <tr>
                        <td>chocolat</td>
                    </tr>
                </table>
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
                    <tr>
                        <th>Ingredients utile pour l'étape</th>
                    </tr>
                    <tr>
                        <td>beurre</td>
                    </tr>
                    <tr>
                        <td>chocolat</td>
                    </tr>
                    <tr>
                        <td>sucre</td>
                    </tr>
                </table>
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

ReactDOM.render(
    <Content />,
    document.getElementById('recette')
);
