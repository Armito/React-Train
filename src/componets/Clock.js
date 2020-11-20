import React from 'react';

// Clock类组件
export default class Clock extends React.Component {
  // 构造函数
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // 组件挂载钩子
  componentDidMount() {
    this.startTimer();
  }

  // 组件卸载钩子
  componentWillUnmount() {
    this.stopTimer();
  }

  // 开启定时器
  startTimer = (n) => {
    if (n) {
      console.log(n);
    }

    this.stopTimer();

    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // 刷新时间
  tick = () => {
    this.setState({
      date: new Date()
    });
  }

  // 关闭定时器
  stopTimer = (n, e) => {
    if (n) {
      console.log(n, e.target);
    }

    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  // jsx
  render() {
    return (
      <div>
        <h1>Hello, { this.props.owner || 'Stranger' }'s Clock!</h1>
        <h2>现在是{ this.state.date.toLocaleTimeString() }.</h2>
        <button onClick={ this.startTimer.bind(this, 'start') }>start</button>
        <button onClick={ this.stopTimer.bind(this, 'stop') }>stop</button>
      </div>
    );
  }
}
