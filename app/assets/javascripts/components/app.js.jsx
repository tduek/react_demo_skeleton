(function(root) {
  root.App = React.createClass({

    render: function() {
      
      return (
        <div>
          <Header />
          { this.props.children }
        </div>
      );
    },

  })
})(this);