/************************
 * ©2019 InputKing.com
 * All rights reserved.
 **************************/
code_holder = '';
cancel_key_event = false;


function init_input() {
$('#edit_area').keydown(key_down).keypress(key_press).mouseup(mouse_up).mouseover(keep_focus).mousedown(mouse_down);
$('.lang').click(on_change_lang);
$('.lang').click(function() {
    $('.keyboard_table').hide();
    $('#' + this.value + '_keyboard').show();
});
$('#search_str').keydown(key_down_text).focus(focus_text);
$("input[name='q']").focus(focus_text);
$('#search').click(look_dict);
$('.lang')[0].checked = true;
on_change_lang();
if (document.all) {
    $('.highlight_copy[name="copy"]')[0].style.display = '';
} else {
    $('.highlight_copy[name="highlight"]')[0].style.display = '';
}
$('.highlight_copy').click(highlight_copy);
$('#print').click(print_text);
$('.symbols').change(disp_fuhao);
$('.focus_after_click').click(release_code);
$('#word_list').mouseenter(function() {
    $('.message').hide();
    $('#usable_key').show();
});
$('#wait_div').hide();
keep_focus();
}

$(document).ready(function() {
    init_input();
});

function mouse_down(e) {
    if ((!document.all && e.button == 0) || (document.all && e.button == 1)) {
        release_code();
    }
}

function key_down_text(e) {
    var key = e.which ? e.which : e.keyCode;
    if (key == 13) {
        look_dict();
    }
}

function look_dict() {
    var str = $('#search_str')[0].value.replace(/\s+/, '');
    if (str != '') {
        if ($('#select_dict')[0].value == 'dict_cn') {
            var win = open("", "popup_win", 'width=650,height=400,scrollbars,resizable');
            $('#dictcn_char')[0].value = str;
            $('#dict_cn')[0].submit();
            win.focus();
        } else if ($('#select_dict')[0].value == 'chinese_dict') {
            var win = open("http://Zdic.net/search/?c=3&q=" + encodeURI(str.substr(0, 1)), "popup_win", 'width=650,height=400,scrollbars,resizable');
            win.focus();
        }
    }
}

function on_change_lang() {
    $('.lang_label').each(function(i) {
        this.style.backgroundColor = "#FFFFFF";
    });
    $('.lang:checked').parent()[0].style.backgroundColor = "#e5e5e5";
    $('#lang_option span').hide();
    $('#' + $('.lang:checked')[0].value).show();
    release_code();
}

function release_code() {
    release_selection($('#edit_area')[0]);
    keep_focus();
    $('#word_list').hide();
}

function clear_all(input) {
    if (code_holder != '') {
        code_holder = '';
        replace_selection(input, '', false);
    }
    $('#word_list').hide();
}

function release_selection(input) {
    if (input.setSelectionRange) {
        input.setSelectionRange(input.selectionEnd, input.selectionEnd);
    } else if (document.selection) {
        var range = document.selection.createRange();
        range.text = range.text;
        range.select();
    }
    code_holder = '';
}

function key_down_英(e, key) {
    switch (key) {
        case 9:
            replace_selection($('#edit_area')[0], '    ', false);
            return return_false();
        case 27:
            return return_false();
        case 17:
            return true;
        case 192:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? '～' : '｀', false);
                return return_false();
            }
            return true;
        case 49:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? '！' : '１', false);
                return return_false();
            }
            return true;
        case 50:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? '＠' : '２', false);
                return return_false();
            }
            return true;
        case 51:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? '＃' : '３', false);
                return return_false();
            }
            return true;
        case 52:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? '＄' : '４', false);
                return return_false();
            }
            return true;
        case 53:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? '％' : '５', false);
                return return_false();
            }
            return true;
        case 54:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? '︿' : '６', false);
                return return_false();
            }
            return true;
        case 55:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? '＆' : '７', false);
                return return_false();
            }
            return true;
        case 56:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? '＊' : '８', false);
                return return_false();
            }
            return true;
        case 57:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? '（' : '９', false);
                return return_false();
            }
            return true;
        case 48:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? '）' : '０', false);
                return return_false();
            }
            return true;
        case 109:
        case 189:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? '＿' : '－', false);
                return return_false();
            }
            return true;
        case 107:
        case 187:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? '＋' : '＝', false);
                return return_false();
            }
            return true;
        case 81:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｑ' : 'ｑ', false);
                return return_false();
            }
            return true;
        case 87:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｗ' : 'ｗ', false);
                return return_false();
            }
            return true;
        case 69:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｅ' : 'ｅ', false);
                return return_false();
            }
            return true;
        case 82:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｒ' : 'ｒ', false);
                return return_false();
            }
            return true;
        case 84:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｔ' : 'ｔ', false);
                return return_false();
            }
            return true;
        case 89:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｙ' : 'ｙ', false);
                return return_false();
            }
            return true;
        case 85:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｕ' : 'ｕ', false);
                return return_false();
            }
            return true;
        case 73:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｉ' : 'ｉ', false);
                return return_false();
            }
            return true;
        case 79:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｏ' : 'ｏ', false);
                return return_false();
            }
            return true;
        case 80:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｐ' : 'ｐ', false);
                return return_false();
            }
            return true;
        case 219:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? '｛' : '［', false);
                return return_false();
            }
            return true;
        case 221:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? '｝' : '］', false);
                return return_false();
            }
            return true;
        case 220:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? '｜' : '＼', false);
                return return_false();
            }
            return true;
        case 65:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ａ' : 'ａ', false);
                return return_false();
            }
            return true;
        case 83:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｓ' : 'ｓ', false);
                return return_false();
            }
            return true;
        case 68:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｄ' : 'ｄ', false);
                return return_false();
            }
            return true;
        case 70:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｆ' : 'ｆ', false);
                return return_false();
            }
            return true;
        case 71:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｇ' : 'ｇ', false);
                return return_false();
            }
            return true;
        case 72:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｈ' : 'ｈ', false);
                return return_false();
            }
            return true;
        case 74:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｊ' : 'ｊ', false);
                return return_false();
            }
            return true;
        case 75:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｋ' : 'ｋ', false);
                return return_false();
            }
            return true;
        case 76:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｌ' : 'ｌ', false);
                return return_false();
            }
            return true;
        case 59:
        case 186:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? '：' : '；', false);
                return return_false();
            }
            return true;
        case 222:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? '＂' : '＇', false);
                return return_false();
            }
            return true;
        case 90:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｚ' : 'ｚ', false);
                return return_false();
            }
            return true;
        case 88:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｘ' : 'ｘ', false);
                return return_false();
            }
            return true;
        case 67:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｃ' : 'ｃ', false);
                return return_false();
            }
            return true;
        case 86:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｖ' : 'ｖ', false);
                return return_false();
            }
            return true;
        case 66:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｂ' : 'ｂ', false);
                return return_false();
            }
            return true;
        case 78:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｎ' : 'ｎ', false);
                return return_false();
            }
            return true;
        case 77:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? 'Ｍ' : 'ｍ', false);
                return return_false();
            }
            return true;
        case 188:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? '＜' : '，', false);
                return return_false();
            }
            return true;
        case 190:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? '＞' : '．', false);
                return return_false();
            }
            return true;
        case 191:
            if ($("input[value='全']")[0].checked) {
                replace_selection($('#edit_area')[0], e.shiftKey ? '？' : '／', false);
                return return_false();
            }
            return true;
    }
}

function key_down(e) {
    $('#show_area').html('');
    $('.message').hide();
    $('#' + $('.lang:checked')[0].value + '_keyboard').show();
    if (e.ctrlKey) return true;
    var key = e.which ? e.which : e.keyCode;
    return window['key_down_' + $('.lang:checked')[0].value](e, key);
}

function return_false() {
    cancel_key_event = true;
    return false;
}

function key_press(e) {
    if (cancel_key_event) {
        cancel_key_event = false;
        return false;
    }
}
initial_table = new Array("r", "R", "s", "e", "E", "f", "a", "q", "Q", "t", "T", "d", "w", "W", "c", "z", "x", "v", "g");
medial_table = new Array("k", "o", "i", "O", "j", "p", "u", "P", "h", "hk", "ho", "hl", "y", "n", "nj", "np", "nl", "b", "m", "ml", "l");
final_table = new Array("", "r", "R", "rt", "s", "sw", "sg", "e", "f", "fr", "fa", "fq", "ft", "fx", "fv", "fg", "a", "q", "qt", "t", "T", "d", "w", "c", "z", "x", "v", "g");
jaso_table = new Array("r", "R", "rt", "s", "sw", "sg", "e", "E", "f", "fr", "fa", "fq", "ft", "fx", "fv", "fg", "a", "q", "Q", "qt", "t", "T", "d", "w", "W", "c", "z", "x", "v", "g", "k", "o", "i", "O", "j", "p", "u", "P", "h", "hk", "ho", "hl", "y", "n", "nj", "np", "nl", "b", "m", "ml", "l");

function compose_korean_char(input, alphabet) {
    if (code_holder == '') {
        for (var i = 0; i < jaso_table.length; i++) {
            if (jaso_table[i] == alphabet) {
                code_holder = String.fromCharCode(12593 + i);
                replace_selection(input, code_holder, true);
                return;
            }
        }
    } else if (code_holder.charCodeAt(0) >= 44032 && code_holder.charCodeAt(0) < 44032 + 11172) {
        var shift = code_holder.charCodeAt(0) - 44032;
        var final_code = shift % 28;
        var medial_code = (shift - final_code) / 28 % 21;
        var initial_code = ((shift - final_code) / 28 - medial_code) / 21;
        if ("rRseEfaqQtTdwWczxvg".indexOf(alphabet) != -1) {
            for (var i = 0; i < final_table.length; i++) {
                if (final_table[i] == final_table[final_code] + alphabet) {
                    code_holder = String.fromCharCode(initial_code * 588 + medial_code * 28 + i + 44032);
                    replace_selection(input, code_holder, true);
                    return;
                }
            }
            replace_selection(input, code_holder, false);
            for (var i = 0; i < jaso_table.length; i++) {
                if (jaso_table[i] == alphabet) {
                    code_holder = String.fromCharCode(12593 + i);
                    replace_selection(input, code_holder, true);
                    return;
                }
            }
        } else if ("koiOjpuPhynbml".indexOf(alphabet) != -1) {
            if (final_table[final_code].length == 2) {
                for (var i = 0; i < initial_table.length; i++) {
                    if (initial_table[i] == final_table[final_code].charAt(1)) {
                        for (var j = 0; j < medial_table.length; j++) {
                            if (medial_table[j] == alphabet) {
                                for (var k = 0; k < final_table.length; k++) {
                                    if (final_table[k] == final_table[final_code].charAt(0)) {
                                        replace_selection(input, String.fromCharCode(initial_code * 588 + medial_code * 28 + k + 44032), false);
                                        code_holder = String.fromCharCode(i * 588 + j * 28 + 44032);
                                        replace_selection(input, code_holder, true);
                                        return;
                                    }
                                }
                            }
                        }
                    }
                }
            } else if (final_table[final_code].length == 1) {
                for (var i = 0; i < initial_table.length; i++) {
                    if (initial_table[i] == final_table[final_code]) {
                        for (var j = 0; j < medial_table.length; j++) {
                            if (medial_table[j] == alphabet) {
                                replace_selection(input, String.fromCharCode(initial_code * 588 + medial_code * 28 + 0 + 44032), false);
                                code_holder = String.fromCharCode(i * 588 + j * 28 + 44032);
                                replace_selection(input, code_holder, true);
                                return;
                            }
                        }
                    }
                }
            } else {
                for (var i = 0; i < medial_table.length; i++) {
                    if (medial_table[i] == medial_table[medial_code] + alphabet) {
                        code_holder = String.fromCharCode(initial_code * 588 + i * 28 + 44032);
                        replace_selection(input, code_holder, true);
                        return;
                    }
                }
                for (var i = 0; i < jaso_table.length; i++) {
                    if (jaso_table[i] == alphabet) {
                        release_selection(input);
                        code_holder = String.fromCharCode(12593 + i);
                        replace_selection(input, code_holder, true);
                        return;
                    }
                }
            }
        }
    } else if (code_holder.charCodeAt(0) >= 12593 && code_holder.charCodeAt(0) < 12644) {
        if ("koiOjpuPhynbml".indexOf(alphabet) != -1 && code_holder.charCodeAt(0) >= 12593 && code_holder.charCodeAt(0) < 12593 + 30) {
            var tmp = jaso_table[code_holder.charCodeAt(0) - 12593];
            for (var i = 0; i < initial_table.length; i++) {
                if (initial_table[i] == tmp) {
                    for (var j = 0; j < medial_table.length; j++) {
                        if (medial_table[j] == alphabet) {
                            code_holder = String.fromCharCode(i * 588 + j * 28 + 44032);
                            replace_selection(input, code_holder, true);
                            return;
                        }
                    }
                }
            }
        } else {
            for (var i = 0; i < jaso_table.length; i++) {
                if (jaso_table[i] == alphabet) {
                    release_selection(input);
                    code_holder = String.fromCharCode(12593 + i);
                    replace_selection(input, code_holder, true);
                    return;
                }
            }
        }
    } else {
        for (var i = 0; i < jaso_table.length; i++) {
            if (jaso_table[i] == alphabet) {
                release_selection(input);
                code_holder = String.fromCharCode(12593 + i);
                replace_selection(input, code_holder, true);
                return;
            }
        }
    }
}

function key_down_韩(e, key) {
    switch (key) {
        case 8:
            if (code_holder != '') {
                if (code_holder.charCodeAt(0) >= 44032 && code_holder.charCodeAt(0) < 44032 + 11172) {
                    var shift = code_holder.charCodeAt(0) - 44032;
                    var final_code = shift % 28;
                    var medial_code = (shift - final_code) / 28 % 21;
                    var initial_code = ((shift - final_code) / 28 - medial_code) / 21;
                    if (final_code != 0) {
                        for (var i = 0; i < final_table.length; i++) {
                            if (final_table[i] == final_table[final_code].substring(0, final_table[final_code].length - 1)) {
                                code_holder = String.fromCharCode(initial_code * 588 + medial_code * 28 + i + 44032);
                                replace_selection($('#edit_area')[0], code_holder, true);
                                return return_false();
                            }
                        }
                    } else if (medial_table[medial_code].length > 1) {
                        for (var i = 0; i < medial_table.length; i++) {
                            if (medial_table[i] == medial_table[medial_code].substring(0, medial_table[medial_code].length - 1)) {
                                code_holder = String.fromCharCode(initial_code * 588 + i * 28 + 44032);
                                replace_selection($('#edit_area')[0], code_holder, true);
                                return return_false();
                            }
                        }
                    } else {
                        for (var i = 0; i < jaso_table.length; i++) {
                            if (jaso_table[i] == initial_table[initial_code]) {
                                code_holder = String.fromCharCode(12593 + i);
                                replace_selection($('#edit_area')[0], code_holder, true);
                                return return_false();
                            }
                        }
                    }
                }
                release_selection($('#edit_area')[0]);
            }
            return true;
        case 9:
            release_selection($('#edit_area')[0]);
            replace_selection($('#edit_area')[0], '    ', false);
            return return_false();
        case 27:
            clear_all($('#edit_area')[0]);
            return return_false();
        case 81:
            compose_korean_char($('#edit_area')[0], e.shiftKey ? 'Q' : 'q');
            return return_false();
        case 87:
            compose_korean_char($('#edit_area')[0], e.shiftKey ? 'W' : 'w');
            return return_false();
        case 69:
            compose_korean_char($('#edit_area')[0], e.shiftKey ? 'E' : 'e');
            return return_false();
        case 82:
            compose_korean_char($('#edit_area')[0], e.shiftKey ? 'R' : 'r');
            return return_false();
        case 84:
            compose_korean_char($('#edit_area')[0], e.shiftKey ? 'T' : 't');
            return return_false();
        case 89:
            compose_korean_char($('#edit_area')[0], 'y');
            return return_false();
        case 85:
            compose_korean_char($('#edit_area')[0], 'u');
            return return_false();
        case 73:
            compose_korean_char($('#edit_area')[0], 'i');
            return return_false();
        case 79:
            compose_korean_char($('#edit_area')[0], e.shiftKey ? 'O' : 'o');
            return return_false();
        case 80:
            compose_korean_char($('#edit_area')[0], e.shiftKey ? 'P' : 'p');
            return return_false();
        case 220:
            if (!e.shiftKey) {
                replace_selection($('#edit_area')[0], '￦', false);
                return return_false();
            }
            return true;
        case 65:
            compose_korean_char($('#edit_area')[0], 'a');
            return return_false();
        case 83:
            compose_korean_char($('#edit_area')[0], 's');
            return return_false();
        case 68:
            compose_korean_char($('#edit_area')[0], 'd');
            return return_false();
        case 70:
            compose_korean_char($('#edit_area')[0], 'f');
            return return_false();
        case 71:
            compose_korean_char($('#edit_area')[0], 'g');
            return return_false();
        case 72:
            compose_korean_char($('#edit_area')[0], 'h');
            return return_false();
        case 74:
            compose_korean_char($('#edit_area')[0], 'j');
            return return_false();
        case 75:
            compose_korean_char($('#edit_area')[0], 'k');
            return return_false();
        case 76:
            compose_korean_char($('#edit_area')[0], 'l');
            return return_false();
        case 90:
            compose_korean_char($('#edit_area')[0], 'z');
            return return_false();
        case 88:
            compose_korean_char($('#edit_area')[0], 'x');
            return return_false();
        case 67:
            compose_korean_char($('#edit_area')[0], 'c');
            return return_false();
        case 86:
            compose_korean_char($('#edit_area')[0], 'v');
            return return_false();
        case 66:
            compose_korean_char($('#edit_area')[0], 'b');
            return return_false();
        case 78:
            compose_korean_char($('#edit_area')[0], 'n');
            return return_false();
        case 77:
            compose_korean_char($('#edit_area')[0], 'm');
            return return_false();
        case 16:
            return true;
        default:
            release_selection($('#edit_area')[0]);
    }
}