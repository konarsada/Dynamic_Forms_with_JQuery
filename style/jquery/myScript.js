$(document).ready(function() {

    $("#myCheck1").on("change", function() {
        if($(this).prop("checked")) {
            confirm("Are you sure?");
        }
        $("#output").html("checked");
    });

    $("#myCheck2").change(function() {
        if(this.checked) {
            $("#output").show();
        }
        else {
            $("#output").hide();
        }
    });

    $("#myForm input:radio").change(function() {
        $("#output").html("radio changed to: " + $(this).val());
    });

    $("#myClicker").click(function(e) {
        e.preventDefault();
        myAjax($("#myA").val());
    });

    function myAjax(a) {
        var newdata = {
            name: a,
        };

        $.ajax({
            url: "ajax.php",
            type: "POST",
            data: newdata,
            success: function(data, status, xhr) {
                $("#output").html(xhr.responseText);
            },
            error: function(data, status, xhr) {
                console.log(xhr);
            },
        });
    };

    $("#pswb").keyup(validate);

    function validate() {
        var psw1 = $("#pswa").val();
        var psw2 = $("#pswb").val();

        if(psw1 === psw2) {
            $("#status").text("Matched");
            $(".matchField").removeClass("highlight");
        }
        else {
            $("#status").text("Not Match");
            $(".matchField").addClass("highlight");
        }
    };

    $("#myForm select").change(function() {
        myAjax($(this).val());
        $("#output2").text("Selected " + $(this).val());
    });
});

/**
 * every time you get a set of elements back jQuery turns it into a jQuery object.
 * $(this)[0] === this
 */