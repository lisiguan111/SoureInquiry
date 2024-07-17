import {
    u as s,
    i,
    r as d,
    o as c,
    c as f,
    a as t,
    b as r,
    w as p,
    t as m,
    d as h,
    e as u,
    f as e
} from "./index-053a024c.js";
const y = {
        width: "100%",
        height: "100%",
        border: "0",
        cellpadding: "0",
        cellspacing: "0"
    },
    _ = {
        height: "110px"
    },
    g = {
        style: {
            width: "100%",
            height: "110",
            "background-position-y": "top",
            "font-weight": "bold",
            color: "#6E5610"
        },
        class: "font-xxxl font-blod",
        align: "center",
        id: "oldschooltitle"
    },
    w = {
        align: "center",
        bgcolor: "#FFFFFF",
        class: "font-xl"
    },
    b = {
        name: "form1",
        action: "https://zhongkao.gzzk.cn/yanzheng/yanzheng_jieguo.asp",
        method: "post",
        autocomplete: "off"
    },
    v = {
        style: {
            border: "0px solid #CCC",
            "background-color": "#fff",
            width: "90%",
            float: "center",
            padding: "0em"
        }
    },
    x = {
        style: {
            border: "0px solid #CCC",
            "background-color": "#fff",
            width: "97%",
            float: "center",
            padding: "0em"
        }
    },
    k = t("div", {
        style: {
            width: "15em",
            float: "left",
            padding: "0.3em"
        }
    }, [t("span", {
        style: {
            width: "6em",
            display: "block",
            float: "left"
        }
    }, "中考年份："), t("span", {
        style: {
            width: "6em",
            display: "block",
            float: "left"
        }
    }, "2024年")], -1),
    z = {
        style: {
            width: "15em",
            float: "left",
            padding: "0.3em"
        }
    },
    C = t("span", {
        style: {
            width: "6em",
            display: "block",
            float: "left"
        }
    }, "考生号：", -1),
    j = {
        style: {
            width: "6em",
            display: "block",
            float: "left"
        }
    },
    F = u('<div style="width:100%;clear:both;"></div><div style="width:15em;float:left;padding:0.3em;"><span style="width:6em;display:block;float:left;">登录密码：</span><span style="width:6em;display:block;float:left;"><input name="yzm" id="yzm" maxlength="4" type="text" autocomplete="off" style="width:4em;" class="font-xl" value=""></span></div><div style="width:100%;clear:both;"></div><input name="ywlb" id="ywlb" type="text" autocomplete="off" style="display:none;" value="zhongkaocj"><input name="zjno" id="zjno" type="text" autocomplete="off" style="display:none;" value="445281200709150615"><input name="ks_h" id="ks_h" type="text" autocomplete="off" style="display:none;" value="0105170144"><input name="nf" id="nf" type="text" autocomplete="off" style="display:none;" value="2023"><div style="width:100%;clear:both;"></div>', 8),
    B = t("div", {
        style: {
            width: "100%",
            clear: "both"
        }
    }, null, -1),
    V = t("tr", null, [t("td", {
        style: {
            width: "100%",
            height: "82px",
            "background-position-y": "top",
            "font-weight": "500",
            "font-size": "14px",
            "line-height": "23px",
            color: "#fff"
        },
        align: "center",
        id: "oldschooltitle"
    }, [e(" 广州市招生考试委员会办公室"), t("br"), t("span", {
        style: {
            color: "#fff",
            "font-size": "14px",
            "font-family": "Verdana,microsoft yahei"
        }
    }, [e("官方网站 gzzk.gz.gov.cn　"), t("span", {
        id: "breakline2",
        style: {
            width: "100%"
        }
    }), e("　官方微博@广州招考")])])], -1),
    D = {
        __name: "entrance",
        setup(N) {
            const o = s(),
                l = i("serial");

            function n() {
                if (document.form1.yzm.value == "") return alert("请输入登录密码！"), document.form1.yzm.focus(), !1;
                if (document.form1.yzm.value.length != 4) return alert("请输入不少于4位的登录密码！"), document.form1.yzm.focus(), !1;
                if (document.form1.ywlb.value == "") return alert("缺少业务类别"), document.form1.ywlb.focus(), !1;
                if (document.form1.zjno.value == "") return alert("缺少证件信息"), document.form1.zjno.focus(), !1;
                if (document.form1.nf.value == "") return alert("缺少年份信息"), document.form1.nf.focus(), !1;
                o.push({
                    name: "result",
                    replace: !0
                })
            }
            return (E, L) => {
                const a = d("font");
                return c(), f("table", y, [t("tbody", null, [t("tr", _, [t("td", g, [r(a, {
                    color: "white"
                }, {
                    default: p(() => [e("广州市中考成绩验证")]),
                    _: 1
                })])]), t("tr", null, [t("td", w, [t("form", b, [t("div", v, [t("div", x, [k, t("div", z, [C, t("span", j, m(h(l)), 1)]), F, t("div", {
                    style: {
                        width: "15em",
                        float: "center",
                        padding: "0.3em"
                    }
                }, [t("span", {
                    style: {
                        width: "90%",
                        display: "block",
                        float: "center"
                    }
                }, [t("input", {
                    class: "btn-normal font-n",
                    style: {
                        cursor: "pointer",
                        width: "80%",
                        "max-width": "10em"
                    },
                    type: "button",
                    value: "确定",
                    id: "LoginButton",
                    name: "LoginButton",
                    onclick: n
                })])]), B])])])])]), V])])
            }
        }
    };
export {
    D as
    default
};