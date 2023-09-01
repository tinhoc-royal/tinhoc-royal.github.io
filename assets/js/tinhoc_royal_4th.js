const sheetID4 = '1LH_NpEsYinLgcYDKE_TAod05P7S9pD57LQrlo-I_mNw';
const base4 = `https://docs.google.com/spreadsheets/d/${sheetID4}/gviz/tq?`;

let sheetName4 = '4th';
const qu_AllData4 = 'Select *';
const queryAllData4 = encodeURIComponent(qu_AllData4);
let urlAllData4 = `${base4}&sheet=${sheetName4}&tq=${queryAllData4}`;

let data = [];
let dataAll = [];
let dataHotNews = [];
let dataSearch = [];

let checkStatusSearch = false;
let htmlContactInfo = "";
let htmlListForm = "";
let htmlModalItemForm = "";

let IndexTypeRealEstate = "";
let IndexPlace = "";
let IndexTypeService = "";
let IndexRangePrice = "";
window.onload = init4;

function init4() {
    fetch(urlAllData4)
        .then(res => res.text())
        .then(rep => {
            
            const jsData = JSON.parse(rep.substr(47).slice(0, -2));
            const colz = [];
            jsData.table.cols.forEach((heading) => {
                
                if (heading.label) {
                    colz.push(heading.label.toLowerCase().replace(/\s/g, ''));
                }
            })
            
            jsData.table.rows.forEach((main) => {
                
                const row = {};
                colz.forEach((ele, ind) => {
                    
                    row[ele] = (main.c[ind] != null) ? main.c[ind].v : '';
                })
                
                dataAll.push(row);
                
            })
            data = dataAll;
            renderToWebsite(dataAll);
        });

        htmlContactInfo = ""
        htmlContactInfo = htmlContactInfo
                        + "<span style=\"font-size: 2rem; font-weight: bold; color: #000000\">"
                        + "Tin học"
                        + "</span>&nbsp;"
                        + "<span style=\"font-size: 2rem; font-weight: bold; color: #2717F1\">"
                        + "Royal"
                        + "</span>";

        document.getElementById("contractInfo").innerHTML = htmlContactInfo;
}

function renderToWebsite(data){
    htmlListForm = "";   
    htmlListForm = htmlListForm + "<table class=\"table-form-real-estate-CongVu\">"
                                + "<tr class=\"table-row-form-real-estate-CongVu\">"
                                + "<th class=\"table-header-form-real-estate-CongVu\">STT</th>"
                                + "<th class=\"table-header-form-real-estate-CongVu\">Bài Học</th>"
                                + "<th class=\"table-header-form-real-estate-CongVu\">Tài Liệu</th>"
                                + "</tr>";

    for(var count = 0; count < data.length; count++){
        let linkFilePDF = String(data[count]['linkpdf']);
        let linkFileWord = String(data[count]['linkword']);
        htmlListForm = htmlListForm + "<tr "
                                    + "id=\"info" + String(count+1) + "\""
                                    + " class=\"table-row-form-real-estate-CongVu\">"
                                    + "<td class=\"table-data-form-real-estate-CongVu\" style=\"text-align:center;\">"
                                    + data[count]['number']
                                    + "</td>"
                                    + "<td class=\"table-data-form-real-estate-CongVu\">"
                                    + data[count]['title']
                                    + "</td>"
                                    + "<td class=\"table-data-form-real-estate-CongVu\" style=\"text-align:center;\">"
                                    + "<a href=\"#info" + String(count+1) + "\" onclick=\"checkPIN("
                                    + "\'"
                                    + String(data[count]['linkpdf'])
                                    + "\'"
                                    + ")\">"
                                    + "<button class=\"button-preview\" type=\"button\">Đọc tài liệu</button>"
                                    + "</a>"

                                    + "</td>"
                                    + "</tr>"
    }
    htmlListForm = htmlListForm + "</table>";
    document.getElementById("listFormRealEstate").innerHTML = htmlListForm;
}

