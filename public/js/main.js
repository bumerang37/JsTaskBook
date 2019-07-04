// $(document).ready(function() {
//     console.log("hi");
// });

// function scan_folder(_path)
// {
//     var folder = fso.GetFolder(_path);
//     for (var e = new Enumerator(folder.Files); !e.atEnd(); e.moveNext())
//         f.writeline(e.item().Path);
//     for (var e = new Enumerator(folder.SubFolders); !e.atEnd(); e.moveNext())
//         scan_folder(e.item().Path);
// }

// var fso = WScript.CreateObject("Scripting.FileSystemObject");
// var fn = "scan_tree.txt";
// var f = fso.CreateTextFile(fn,true,true);
// scan_folder(".");
// f.Close();


$(document).ready(function () {
    // console.log("test");
    $("#bookClicker a").click(function () {
        var item = $(this).data('id');
        var link = $(this).data('link');
        if (item == "mozilla_dev" || item == 'safari_dev') {
            alert("Данный сайт возможно посмотреть только открыв в новой вкладке");
            $(this).attr('src',link);
            $(this).attr('target','_blank');
            window.open(link, '_blank');
            $("#bookname").hide();
            // var framefix = "&output=embed";
            // link += framefix;
        } else {
            $("#bookname").show();
        }

        $("#bookname").attr('src', link);
        // window.location.replace(link);
        // console.log(link);
        setTimeout(setFocusThickboxIframe, 100);
      
    })

    
});

function setFocusThickboxIframe() {
    var iframe = $("#bookname")[0];
    iframe.contentWindow.focus();
}

var iframe = document.getElementById("bookname");
iframe.addEventListener("change", function() {
    iframe.focus();
})