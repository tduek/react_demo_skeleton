(function(root) {
  root.PostForm = React.createClass({
    getInitialState: function() {
      return { title: "", imageUrl: "", imageFile: null };
    },

    render: function() {
      return (
        <div>
          <h2>New Post</h2>
          <form onSubmit={this.handleSubmit}>
            <label>Title
              <input type="text" onChange={this.changeTitle} value={this.state.title} />
            </label>

            <input type="file" onChange={this.changeFile} value={this.state.image} />

            <button>Submit</button>
          </form>
          <img className="preview-image" src={this.state.imageUrl} />
        </div>
      );
    },

    changeTitle: function(e) {
      this.setState({ title: e.currentTarget.value });
    },

    changeFile: function(e) {
    },

    handleSubmit: function(e) {
      e.preventDefault();
    },

    resetForm: function() {
    }
  });
})(this);
