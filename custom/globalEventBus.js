(function(window) {
  const globalEventBus = {};

  let listenerContainer = {};
  /* 
    {
      "add": [
        listener1,
       listener2
      ],
      "delete": [  listener3]
    }
  */
  globalEventBus.on = function(eventName, listener) {
    let listeners = listenerContainer[eventName];
    if (listeners) {
      listeners.push(listener);
    } else {
      listenerContainer[eventName] = [listener];
    }
  };
  globalEventBus.emit = function(eventName, data) {
    const listeners = listenerContainer[eventName];
    if (listeners && listeners.length > 0) {
      listeners.forEach((listener) => listener(data));
    }
  };
  globalEventBus.off = function(eventName) {
    if (eventName === undefined) {
      listenerContainer = {};
    } else {
      delete listenerContainer[eventName];
    }
  };
  window.globalEventBus = globalEventBus;
})(window);
/* 
    globalEventBus:
      1). on(eventName, listener): 绑定事件监听
      2). emit(eventName, data): 分发事件
      3). off(eventName): 移除事件监听
      globalEventBus.on("add", (data) => {
        console.log("add1()", data);
      });
      globalEventBus.on("add", (data) => {
        console.log("add2()", data);
      });
      globalEventBus.on("delete", (data) => {
        console.log("delete()", data);
      });
      // globalEventBus.off()
      globalEventBus.off("add");
      globalEventBus.emit("add", "atguigu");
      globalEventBus.emit("delete", "baidu");

    */
