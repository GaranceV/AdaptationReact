/**
 * Created by sonia on 16/10/15.
 */
var Content = React.createClass({
    render: function () {
        return (
            <div className = "content">
                <h1>Muffin</h1>
                <Table />
                <Etapes />
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

var Etapes = React.createClass({
    render:function (){
        return (
            <div className = "etapes">
                <p>Travail</p>
            </div>
        );
    }
});

ReactDOM.render(
    <Content />,
    document.getElementById('recette')
);
