(function(Scratch) {
  'use strict';
  let TextAnswer = '';
  let YesNoAns = false;
  class AlertExtension {
    getInfo() {
      return {
        id: 'AlertProgramCreateharuru',
        name: 'アラート機能',
        color1: '#E53535',
        blocks: [
          {
            opcode: 'Alert',
            blockType: Scratch.BlockType.COMMAND,
            text: '[MESSAGE] という警告を出して待つ',
            arguments: {
              MESSAGE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'エラーが発生しました！'
              }
            }
          },
          {
            opcode: 'YesNo',
            blockType: Scratch.BlockType.COMMAND,
            text: 'YesかNoの質問[MESSAGE]と聞いて待つ ',
            arguments: {
              MESSAGE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'いいですか？'
              }
            }
          },
          {
            opcode: 'getAns',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'YesかNoの答え'
          },
          {
            opcode: 'FreeText',
            blockType: Scratch.BlockType.COMMAND,
            text: '[MESSAGE] と聞いて待つ',
            arguments: {
              MESSAGE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'あなたの名前はなんですか？'
              }
            }
          },
          {
            opcode: 'TextAns',
            blockType: Scratch.BlockType.REPORTER,
            text: 'テキストの答え'
          }
        ]
      };
    }

    Alert(args) {
      window.alert(args.MESSAGE);
    }

    YesNo(args) {
      // 読み込みエラーを避けるため、変数宣言を工夫したよ
      YesNoAns = window.confirm(args.MESSAGE);
    }

    getAns() {
      // 保存した値を返す
      return YesNoAns || false;
    }
    
    FreeText(args){
      TextAnswer = prompt (args.MESSAGE);
    }

    TextAns(){
      return TextAnswer || '';
    }
  }

  Scratch.extensions.register(new AlertExtension());
})(Scratch);
