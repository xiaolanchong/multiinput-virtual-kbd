fuhao = new Array();
fuhao[0] = "。，、；：？！…—·ˉˇ¨‘’“”々～‖∶＂＇｀｜〃〔〕〈〉《》「」『』．〖〗【】（）［］｛｝";
fuhao[1] = "≈≡≠＝≤≥＜＞≮≯∷±＋－×÷／∫∮∝∞∧∨∑∏∪∩∈∵∴⊥∥∠⌒⊙≌∽√≒≦≧⊿";
fuhao[2] = "ⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑⒒⒓⒔⒕⒖⒗⒘⒙⒚⒛⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⑾⑿⒀⒁⒂⒃⒄⒅⒆⒇①②③④⑤⑥⑦⑧⑨⑩㈠㈡㈢㈣㈤㈥㈦㈧㈨㈩";
fuhao[3] = "￥￠￡℅℉㎡℃♂♀°′″¤‰§№☆★○●◎◇◆□■△▲▼▽◢◣◤◥※→←↑↓↖↗↘↙〓＿￣―☉⊕〒";
fuhao[4] = "─━│┃┄┅┆┇┈┉┊┋┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┯┰┱┲┳┴┵┶┷┸┹┺┻┼┽┾┿╀╁╂╃╄╅╆╇╈╉╊╋═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬╭╮╯╰╱╲╳▁▂▃▄▅▆▇█▉▊▋▌▍▎▏▓▔▕";
fuhao[5] = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω";
fuhao[6] = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя";
fuhao[7] = "āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü";
fuhao[8] = "ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩ˙ˊˇˋ";
fuhao[9] = "ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをん";
fuhao[10] = "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペ>ホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶ";
fuhao[11] = "、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈〉《》「」『』【】";
fuhao[12] = "─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂";
fuhao[13] = "①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ";
fuhao[14] = "㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡";
fuhao[15] = "㍻〝〟№㏍℡㊤㊥㊦㊧㊨㈱㈲㈹㍾㍽㍼";
fuhao[16] = "≡≠＝≒≦≧＜＞＋－±×÷／∫∮∽∝∞∧∨∑√⊥∥∠⌒∟⊿∵∴∈∋⊆⊇⊂⊃∪∩";
fuhao[17] = "♂♀°′″℃￥＄￠￡§☆★○●◎◇◆□■△▲▽▼※〒→←↑↓〓￢⇒⇔∀∃∂∇≪≫∬Å‰♯♭♪†‡¶◯";

function disp_fuhao() {
    $('.message, .keyboard_table').hide();
    if (this.selectedIndex == 0) return;
    var contents = '';
    for (var i = 0; i < fuhao[this.value].length; i++) {
        contents += '<button type="button" class="character">' + fuhao[this.value].substr(i, 1) + '</button>&nbsp; '
    }
    $('#show_area').html(contents);
    $('.character').click(insert_character).dblclick(insert_character);
    this.selectedIndex = 0;
    keep_focus()
}

function insert_character() {
    replace_selection($('#edit_area')[0], this.innerHTML, false)
}

function replace_selection(input, str, highlight) {
    input.focus();
    if (input.setSelectionRange) {
        var selectionStart = input.selectionStart;
        var selectionEnd = input.selectionEnd;
        var oldScrollTop = input.scrollTop;
        var oldScrollHeight = input.scrollHeight;
        var oldLen = input.value.length;
        input.value = input.value.substring(0, selectionStart) + str + input.value.substring(selectionEnd);
        if (highlight) {
            input.setSelectionRange(selectionStart, selectionStart + str.length)
        } else {
            input.selectionStart = selectionStart + str.length;
            input.selectionEnd = input.selectionStart
        }
        if (input.value.length == oldLen) {
            input.scrollTop = oldScrollTop
        } else if (input.scrollHeight > oldScrollHeight) {
            input.scrollTop = oldScrollTop + input.scrollHeight - oldScrollHeight
        } else {
            input.scrollTop = oldScrollTop
        }
    } else if (document.selection) {
        var range = document.selection.createRange();
        if (range.parentElement() == input) {
            range.text = str;
            if (highlight) range.moveStart('character', -str.length);
            range.select()
        }
    }
}

function keep_focus() {
    $('#edit_area')[0].focus()
}

function focus_text(e) {
    this.value = ''
}

function highlight_copy() {
    $('#edit_area')[0].focus();
    if (document.all) {
        var range = $('#edit_area')[0].createTextRange();
        range.execCommand("Copy")
    }
    $('#edit_area')[0].select();
    mouse_up()
}

function print_text(e) {
    if ($('#edit_area')[0].value != '') {
        var win = window.open('', 'print_win', 'width=600,height=300,resizable=1');
        win.document.open();
        win.document.write('<pre>' + $('#edit_area')[0].value.replace(/</g, '&lt;') + '</pre>');
        win.document.close();
        if (document.all) {
            win.print()
        } else {
            win.onload = win.print
        }
    }
}

function mouse_up() {
    var selected_text = get_code($('#edit_area')[0]);
    if (selected_text != '' && selected_text.length < 50) {
        $("input[name='q']")[0].value = selected_text;
        $('#search_str').val(selected_text)
    }
}

function get_code(input) {
    var code = '';
    if (input.setSelectionRange) {
        code = input.value.substr(input.selectionStart, input.selectionEnd - input.selectionStart)
    } else if (document.selection) {
        var range = document.selection.createRange();
        code = range.text
    }
    return code
}