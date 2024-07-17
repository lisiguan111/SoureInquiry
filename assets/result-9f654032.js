import {
    i,
    g as b,
    h as x,
    r as k,
    o as I,
    c as F,
    a as t,
    b as z,
    w as D,
    t as n,
    d as e,
    f as s
} from "./index-053a024c.js"
const N = {
    width: "100%",
    height: "100%",
    border: "0",
    cellpadding: "0",
    cellspacing: "0"
},
 ee = "1.我市初中学业水平考试录取计分科目为语文、数学、英语(含听说)、道德与法治、历史、物理(含物理实验操作)、化学(含化学实验操作)、体育与健康，其中语文、数学、英语(含听说)各120分，道德与法治、历史各90分，物理(含物理实验操作)、化学(含化学实验操作)各100分，体育与健康70分，总分810分。" ,
 ee2 = "2.特长生和名额分配投档录取时，考生的投档分数只取初中学业水平考试录取计分科目成绩，不含高中阶段学校考试招生各项加分或优先录取。你的录取计分科目老试总成绩为764分，根据同分排序规则，同分席号为" ,
    V = {
        height: "110px"
    },
    B = {
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
    M = {
        align: "center",
        bgcolor: "#FFFFFF"
    },
    A = {
        align: "left",
        style: {
            "padding-left": "5%",
            "padding-right": "5%",
            "padding-top": "10px",
            "line-height": "160%"
        }
    },
    C = t("span", {
        class: "font-l font-blod red"
    }, "2024广州市初中学业水平考试成绩:", -1),
    E = t("br", null, null, -1),
    L = t("div", {
        style: {
            width: "100%",
            clear: "both"
        }
    }, null, -1),
    T = {
        style: {
            width: "15em",
            float: "left",
            padding: "0.3em"
        }
    },
    j = t("span", {
        style: {
            width: "4em",
            display: "block",
            float: "left"
        }
    }, "考号：", -1),
    H = {
        style: {
            width: "10em",
            display: "block",
            float: "left"
        }
    },
    S = {
        style: {
            width: "15em",
            float: "left",
            padding: "0.3em"
        }
    },
    Y = t("span", {
        style: {
            width: "4em",
            display: "block",
            float: "left"
        }
    }, "姓名：", -1),
    q = {
        style: {
            width: "10em",
            display: "block",
            float: "left"
        }
    },
    G = t("div", {
        style: {
            width: "100%",
            clear: "both"
        }
    }, null, -1),
    J = {
        border: "1",
        align: "center",
        cellpadding: "10",
        cellspacing: "0"
    },
    K = t("tr", null, [t("td", {
        align: "center",
        valign: "middle",
        style: {
            width: "5em"
        }
    }, "科目"), t("td", {
        align: "center",
        valign: "middle",
        style: {
            width: "4em"
        }
    }, "成绩")], -1),
    O = t("td", {
        align: "center",
        valign: "middle"
    }, "总分", -1),
    P = {
        align: "center",
        valign: "middle"
    },
    Q = t("td", {
        align: "center",
        valign: "middle"
    }, "语文", -1),
    R = {
        align: "center",
        valign: "middle"
    },
    U = t("td", {
        align: "center",
        valign: "middle"
    }, "数学", -1),
    W = {
        align: "center",
        valign: "middle"
    },
    X = t("td", {
        align: "center",
        valign: "middle"
    }, "英语", -1),
    Z = {
        align: "center",
        valign: "middle"
    },
    $ = t("td", {
        align: "center",
        valign: "middle"
    }, "道德与法治", -1),
    tt = {
        align: "center",
        valign: "middle"
    },
    et = t("td", {
        align: "center",
        valign: "middle"
    }, "历史", -1),
    nt = {
        align: "center",
        valign: "middle"
    },
    lt = t("td", {
        align: "center",
        valign: "middle"
    }, "物理", -1),
    it = {
        align: "center",
        valign: "middle"
    },
    ot = t("td", {
        align: "center",
        valign: "middle"
    }, "化学", -1),
    st = {
        align: "center",
        valign: "middle"
    },
    dt = t("td", {
        align: "center",
        valign: "middle"
    }, "体育与健康", -1),
    at = {
        align: "center",
        valign: "middle"
    },
    ct = {
        align: "center",
        class: "greyfont"
    },
    rt = t("br", null, null, -1),
    ht = t("p", null, "　", -1),
    _t = t("tr", null, [t("td", {
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
    }, [s(" 广州市招生考试委员会办公室"), t("br"), t("span", {
        style: {
            color: "#fff",
            "font-size": "14px",
            "font-family": "Verdana,microsoft yahei"
        }
    }, [s("官方网站 gzzk.gz.gov.cn　"), t("span", {
        id: "breakline2",
        style: {
            width: "100%"
        }
    }), s("　官方微博@广州招考")])])], -1),
    pt = {
        __name: "result",
        setup(gt) {
            const u = i("serial"),
                y = i("studentName"),
                a = i("chinese"),
                c = i("math"),
                r = i("english"),
                h = i("moralityAndLaw"),
                _ = i("history"),
                g = i("physics"),
                m = i("chemistry"),
                p = i("sports"),
                f = b("")

            function v() {
                const o = new Date,
                    l = {
                        year: o.getFullYear(),
                        month: o.getMonth() + 1,
                        date: o.getDate(),
                        hour: o.getHours(),
                        min: o.getMinutes()
                    },
                    d = l.month > 10 ? l.month : "0" + l.month,
                    w = l.date > 10 ? l.date : "0" + l.date
                f.value = l.year + "-" + d + "-" + w + " " + l.hour + ":" + l.min
            }
            return x(() => v()), (o, l) => {
                const d = k("font")
                return I(), F("table", N, [t("tbody", null, [t("tr", V, [t("td", B, [z(d, {
                    color: "white"
                }, {
                    default: D(() => [s("广州市中考成绩验证")]),
                    _: 1
                })])]), t("tr", null, [t("td", M, [t("div", A, [C, E, L, t("div", T, [j, t("span", H, n(e(u)), 1)]), t("div", S, [Y, t("span", q, n(e(y)), 1)]), G, t("table", J, [t("tbody", null, [K, t("tr", null, [O, t("td", P, n(parseInt(e(a), 10) + parseInt(e(c), 10) + parseInt(e(r), 10) + parseInt(e(h), 10) + parseInt(e(_), 10) + parseInt(e(g), 10) + parseInt(e(m), 10) + parseInt(e(p), 10)), 1)]), t("tr", null, [Q, t("td", R, n(e(a)), 1)]), t("tr", null, [U, t("td", W, n(e(c)), 1)]), t("tr", null, [X, t("td", Z, n(e(r)), 1)]), t("tr", null, [$, t("td", tt, n(e(h)), 1)]), t("tr", null, [et, t("td", nt, n(e(_)), 1)]), t("tr", null, [lt, t("td", it, n(e(g)), 1)]), t("tr", null, [ot, t("td", st, n(e(m)), 1)]), t("tr", null, [dt, t("td", at, n(e(p)), 1)])])]),t("p", ct, [rt, s("--" + n(f.value) + "--", 1)]),s("说明："),t("div", ct, [rt, s( n(ee), 1)]), t("div", ct, [rt, s( n(ee2), 1)])]), ht])]), _t])])
            }
        }
    }
export {
    pt as
        default
}