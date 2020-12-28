$(function(){
    var fishes;
    fetch('https://api.fourteenfish.com/api/v2/developers/coding-task-data')
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          // todo: append data to the page
          console.log(data);
          //trying to return the data:
          // alert(data[1].id);

          fishes = data;

          //trying to insert data to the fish name section
          // $('#fish-name').html(fishes[0].name);                  

        }).catch(function (err) {
          // if there was an error:
          console.warn('Something went wrong.', err);
        });

    // function to capitalise the first letters of the names:
    function capitalise(name) {
        const finalNames = name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        return finalNames;
    }

    $('#select-fish').on('change', function(){
        // todo: display relevant data
        //check if the function 'on-change' works:
        // alert($('#select-fish').val());
        //below was used to check/figure out how to pull the data/ and if the data is available globally:
        // $('#fish-name').html(fishes[4].name);
      for (i=0; i<fishes.length; i++) {
        //checking if the loop works and pulles the right values from the 'fishes':
        // alert(fishes[i].name); 
        if ($('#select-fish').val() == fishes[i].id) {
          //below 'alert' is used to check if the 'if statement' works as expected
          // alert('Hello');
          $('#fish-name').html('Nice, you have chosen:  ' + capitalise(fishes[i].name));
          $('.fish-description').html(fishes[i].description);
          //cod has no src provided, below should ensure that there is a picture loaded on the page anyway
          if (fishes[i].id == 198 && fishes[i].image == ""){
            $('.fish-image').attr('src', 'https://youngsseafood.co.uk/wp-content/uploads/2017/06/atlantic-cod-300x115.png');
          } else {
            $('.fish-image').attr('src', fishes[i].image);
          }
          
        }
      }
      //changing the wording of the fish-selector label
      $('#labelF').html('Why not choose another one?');
    });
})