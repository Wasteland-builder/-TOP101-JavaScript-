var reverseList = function(head) {
    // 如果列表为空，不需要反转
    if (head === {}) return {};
    // 设置两个指针
    // 上一个节点的指针，初始值为空
    let prev = null;
    // 当前节点的指针
    let curr = head;
    // 定义一个临时变量
    let temp;
    while (curr !== null) {
        // 用临时变量记录后一个节点
        temp = curr.next;
        // 断开当前节点与后面节点的指针
        curr.next = prev;
        // 轮换当前指针与上一个 指针
        prev = curr;
        curr = temp;
    }
    return prev;
};