const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
//  wrapper.text(data.results[0].gender);
  wrapper.text(state.datos[0].gender)
  root.append(wrapper);
}

//funcion anónima esencial para que se ejecute en jQuery

const state = {
  datos: null
};

$(_ => {


$.getJSON({
  url: 'http://laboratoria.cuadra.co:9339/api/v1/students/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    state.datos = data.results;
    const root = $('#root');
    render(root);
  }
});


});
