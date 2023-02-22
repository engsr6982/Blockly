import * as Blockly from 'blockly/core';

// 注册插件
Blockly.Blocks['regplugins'] = {
    init: function () {
        this.appendValueInput("名称")
            .setCheck("String")
            .appendField("注册插件")
            .appendField("名称");
        this.appendValueInput("简介")
            .setCheck("String")
            .appendField("简介");
        this.appendValueInput("版本")
            .setCheck("Array")
            .appendField("版本");
        this.setInputsInline(true);
        this.setColour(230);
        this.setTooltip("在开始为你的插件编写代码之前，你首先需要向加载器提供一些插件相关的信息");
        this.setHelpUrl("https://docs.litebds.com/zh-Hans/#/LLSEPluginDevelopment/ScriptAPI/ScriptHelp?id=%e8%84%9a%e6%9c%ac%e5%bc%95%e6%93%8e-%e9%80%9a%e7%94%a8%e8%84%9a%e6%9c%ac%e6%8e%a5%e5%8f%a3%e6%96%87%e6%a1%a3");
    }
};
Blockly.JavaScript['regplugins'] = function (block) {
    var value___name = Blockly.JavaScript.valueToCode(block, '名称', Blockly.JavaScript.ORDER_ATOMIC);
    var value___jj = Blockly.JavaScript.valueToCode(block, '简介', Blockly.JavaScript.ORDER_ATOMIC);
    var value___vs = Blockly.JavaScript.valueToCode(block, '版本', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `ll.registerPlugin(${value___name}, ${value___jj}, ${value___vs}, {})`;
    return code;
};