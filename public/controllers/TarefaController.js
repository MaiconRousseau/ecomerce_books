//var list = [{descricao: "Donald Trump"},{descricao:"Barack Obrahma"}, {descricao:"Getulio Vargas"} ];
var list = [];
var cont = 0;
localStorage.setItem('list', JSON.stringify(list));
export default class TarefaController {

  static lista(){
    list = JSON.parse(localStorage.getItem('list'));
    return list;
  }
  static insert(tarefa){
      tarefa.id = cont++;
      list = JSON.parse(localStorage.getItem('list'));
      list.push(tarefa);
      localStorage.setItem('list', JSON.stringify(list));
  }
  static update(params){
    let novo = {descricao:params.descricao, id: params.id };
    list = JSON.parse(localStorage.getItem('list'));
    let elements = list.filter(function(user){
      return user.id != params.id;
    });
    elements.push(novo);
    localStorage.setItem('list', JSON.stringify(elements));
  }

  static delete(params){
    list = JSON.parse(localStorage.getItem('list'));
    let elements = list.filter(function(user){
      return user.id != params.id;
    });
    localStorage.setItem('list', JSON.stringify(elements));
  }
}
