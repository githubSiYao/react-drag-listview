/* eslint-disable no-console,func-names,react/no-multi-comp */
const React = require('react');
const ReactDOM = require('react-dom');
const ReactDragListView = require('react-drag-listview/src/index.js');

require('./index.less');

class Demo extends React.Component {
  constructor(props) {
    super(props);
    const data = [];
    for (let i = 1, len = 21; i < len; i++) {
      data.push({
        title: `rows${i}`
      });
    }
    this.state = {
      data
    };
  }

  render() {
    const that = this;
    const dragProps = {
      onDragEnd(fromIndex, toIndex) {
        const data = that.state.data;
        const item = data.splice(fromIndex, 1)[0];
        data.splice(toIndex, 0, item);
        that.setState({ data });
      },
      nodeSelector: 'li',
      handleSelector: 'a'
    };

    return (
      <div className="simple simple1">
        <h2>Dragging handle</h2>
        <div className="simple-inner">
          <ReactDragListView {...dragProps}>
            <ol>
            {this.state.data.map((item, index) => (
              <li key={index}>
                {item.title}
                <a href="#">Drag</a>
              </li>
            ))}
            </ol>
          </ReactDragListView>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo/>, document.getElementById('__react-content'));
