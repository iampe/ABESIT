
        // To take input
        var st="";
        function append(input) {
            st=st+input;
            document.getElementById('result').value = st;
        }

        // To calculate the expression
        function calculateResult() {
            st=eval(st);
            document.getElementById('result').value = st;
        }

        // To clear the output
        function clearInput() {
            document.getElementById('result').value = '';
        }

        function BackInput(){
            st=st.slice(0,st.length-1);
            document.getElementById("result").value=st ;
        }
  