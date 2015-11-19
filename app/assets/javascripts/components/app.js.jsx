(function(root) {
  root.App = React.createClass({


    render: function() {
      return (
        <div>
          { this.props.children }
        </div>
      );
    },

  })
})(this);