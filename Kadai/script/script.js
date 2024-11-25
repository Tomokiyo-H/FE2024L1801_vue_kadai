// JavaScript用ファイル
new Vue({
  el: '#app',
  data: {
    name: '',            // ユーザーが入力した名前
    fortune: '',         // 運勢の結果
    errorMessage: '',    // エラーメッセージ
    isValidName: false   // 名前のバリデーションフラグ
  },
  methods: {
    validateName() {
      if(this.name.length<5){
        this.errorMessage ="名前は5文字以上で入力してください";
        this.isValidName=false;
      }else{
        this.errorMessage="";
        this.isValidName=true;
      }
      //名前は5文字以上で入力　5文字以下ならエラーメッセージ表示
    },
    drawFortune() {
      // バリデーションが成功した場合のみランダムな運勢を生成
      if (a) {
        //0から100までのランダムな数値を取得する
        const randomNumber = Math.round(Math.random() * 100);
        //数値が80以上の場合（大吉）
        if(rendomNumber >=80){
          this.fortune='daikiti';
        }
        //数値が60以上の場合（吉）
        if(rendomNumber >=60){
          this.fortune='kiti';
        }
        //数値が40以上の場合（中吉）

        //数値が20以上の場合（小吉）

        //それ以外の場合（凶）

      }
    }
  }
});