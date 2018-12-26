/**
 * Dashboard handler
 */

var predicateStart = new ej.data.Predicate('DateTime', 'greaterthanorequal', window.startDate);
var predicateEnd = new ej.data.Predicate('DateTime', 'lessthanorequal', window.endDate);
var predicate = predicateStart.and(predicateEnd);
var chartDS;
var pieChartDS;
var gridDS;
var linechartObj;
var columnChartObj;
var gridObj;
var pie;
var grid;
var pieLegendData = [];
var pieRenderData = [];
var tempData = expenseData;
var legendData = [];
var pieRenderingData = [];
var category = [];
var expTotal = 0;
var dateRangePickerObject;
var groupValue = 0;
var renderData = [];
var hiGridData = [];

function cardUpdate(toUpdate) {
    if (toUpdate) {
        updatePredicate();
    }
    var intl = new ej.base.Internationalization();
    var nFormatter = intl.getNumberFormat({ skeleton: 'C0', currency: 'USD' });
    var incomeRS = 0;
    var expenseRS = 0;
    /* tslint:disable-next-line */
    var incomeD = [];
    /* tslint:disable-next-line */
    var expenseD = [];
    //new ej.data.DataManager(window.expenseDS).executeQuery((new ej.data.Query()
    //    .where((predicateStart.and(predicateEnd)).and('TransactionType', 'equal', 'Income'))))
    //    /* tslint:disable-next-line */
    //    .then(function (e) {
    //        incomeD = objectAssign(e);
    //        for (var i = 0; i < incomeD.length - 1; i++) {
    //            incomeRS += parseInt(incomeD[i].Amount, 0);
    //        }
    //        if (document.getElementById('tolincome')) {
    //            document.getElementById('tolincome').textContent = window.getCurrencyVal(incomeRS ? incomeRS : 0);
    //        }
    //    });

    //new ej.data.DataManager(window.expenseDS)
    //    .executeQuery(new ej.data.Query().where((predicateStart.and(predicateEnd)).and('TransactionType', 'equal', 'Expense')))
    //    /* tslint:disable-next-line */
    //    .then(function (e) {
    //        expenseD = objectAssign(e);
    //        for (var i = 0; i < expenseD.length - 1; i++) {
    //            expenseRS += parseInt(expenseD[i].Amount, 0);
    //        }
    //        if (document.getElementById('tolexpense')) {
    //            document.getElementById('tolexpense').textContent = window.getCurrencyVal(expenseRS ? expenseRS : 0);
    //        }
    //        if (document.getElementById('current-balance')) {
    //            document.getElementById('current-balance').textContent = window.getCurrencyVal(incomeRS - expenseRS);
    //        }
    //        if (document.getElementById('tolbalance')) {
    //            document.getElementById('tolbalance').textContent = window.getCurrencyVal(incomeRS - expenseRS);
    //        }
    //    });

    /* tslint:disable-next-line */
    //var transaction = new ej.data.DataManager(window.expenseDS)
    //    .executeLocal((new ej.data.Query().where(predicateStart.and(predicateEnd))));
    //if (document.getElementById('toltransaction')) {
    //    document.getElementById('toltransaction').textContent = window.getNumberVal(transaction.length);
    //}
}

/* tslint:disable-next-line */
var columnIncomeDS = [];
/* tslint:disable-next-line */
var columnExpenseDS = [];
/* tslint:disable-next-line */
var lineDS = [];
/* tslint:disable-next-line */
var tempChartIncomeDS = {};
/* tslint:disable-next-line */
var tempChartExpenseDS = {};
/* tslint:disable-next-line */
var tempChartLineDS = {};
/* tslint:disable-next-line */
var curDateTime;
/* tslint:disable-next-line */
var lineD = [];

function updatePredicate() {
    predicateStart = new ej.data.Predicate('DateTime', 'greaterthanorequal', window.startDate);
    predicateEnd = new ej.data.Predicate('DateTime', 'lessthanorequal', window.endDate);
    predicate = predicateStart.and(predicateEnd);
}
/* tslint:disable-next-line */
function objectAssign(e) {
    var result = [];
    /* tslint:disable-next-line */
    var obj;
    obj = ej.base.extend(obj, e.result, {}, true);
    for (var data = 0; data <= Object.keys(e.result).length; data++) {
        result.push(obj[data]);
    }
    return result;
}
// tslint:disable-next-line:max-func-body-length
function onDateRangeChange(args) {
    window.startDate = args.startDate;
    window.endDate = args.endDate;
    lineDS = [];
    lineD = [];
    columnIncomeDS = [];
    columnExpenseDS = [];
    tempChartExpenseDS = [];
    tempChartIncomeDS = [];
    lineD = [];
    predicateStart = new ej.data.Predicate('DateTime', 'greaterthanorequal', args.startDate);
    predicateEnd = new ej.data.Predicate('DateTime', 'lessthanorequal', args.endDate);
    predicate = predicateStart.and(predicateEnd);
    cardUpdate();
    /* tslint:disable */
    //new ej.data.DataManager(window.expenseDS)
    //    .executeQuery(new ej.data.Query().where(predicate.and('TransactionType', 'equal', 'Expense')))
    //    .then(function (e) {
    //        getCoulmnChartExpenseDS(e);

    //    });
    /* tslint:enable */
    /* tslint:disable */
    //new ej.data.DataManager(window.expenseDS)
    //    .executeQuery(new ej.data.Query().where(predicate.and('TransactionType', 'equal', 'Income')))
    //    .then(function (e) {
    //        getCoulmnChartIncomeDS(e);
    //        columnChartObj.setProperties({
    //            //Initializing Chart Series
    //            primaryXAxis: {
    //                labelFormat: 'MMM',
    //                valueType: 'DateTime',
    //                edgeLabelPlacement: 'Shift'
    //            },
    //            //Initializing Primary Y Axis
    //            primaryYAxis:
    //            {
    //                title: 'Amount',
    //                labelFormat: 'c0'
    //            },
    //            useGroupingSeparator: true,
    //            series: [
    //                {
    //                    type: 'Column',
    //                    dataSource: columnIncomeDS,
    //                    legendShape: 'Circle',
    //                    xName: 'DateTime',
    //                    width: 2,
    //                    yName: 'Amount',
    //                    name: 'Income',
    //                    marker: {
    //                        visible: true, height: 10, width: 10
    //                    },
    //                    fill: '#A16EE5',
    //                    border: { width: 0.5, color: '#A16EE5' },
    //                    animation: { enable: false },
    //                },
    //                {
    //                    type: 'Column',
    //                    dataSource: columnExpenseDS,
    //                    legendShape: 'Circle',
    //                    xName: 'DateTime',
    //                    width: 2,
    //                    yName: 'Amount',
    //                    name: 'Expense',
    //                    marker: {
    //                        visible: true, height: 10, width: 10
    //                    },
    //                    fill: '#4472C4',
    //                    animation: { enable: false },
    //                },
    //            ]
    //        });
    //        columnChartObj.refresh();
    //        lineD = [];
    //        getLineChartDS();
    //        linechartObj.setProperties({
    //            //Initializing Chart Series
    //            series: [
    //                {
    //                    type: 'Area',
    //                    dataSource: lineDS,
    //                    xName: 'DateTime', width: 2, marker: {
    //                        visible: true,
    //                        width: 10,
    //                        height: 10,
    //                        fill: 'white',
    //                        border: { width: 2, color: '#0470D8' },
    //                    },
    //                    legendShape: 'Circle',
    //                    yName: 'Amount', name: 'Amount',
    //                    fill: 'rgba(4, 112, 216, 0.3)',
    //                    border: { width: 0.5, color: '#0470D8' }
    //                }]
    //        });
    //        linechartObj.refresh();
    //    });

    formatRangeDate();
}
function DateRange() {
    dateRangePickerObject = document.getElementById("daterangepicker").ej2_instances[0];
    dateRangePickerObject.setProperties({
        presets: [
            { label: 'Last Month', start: new Date('10/1/2017'), end: new Date('10/31/2017') },
            { label: 'Last 3 Months', start: new Date('9/1/2017'), end: new Date('11/30/2017') },
            { label: 'All Time', start: new Date('6/1/2017'), end: new Date('11/30/2017') }
        ]
    });
    window.startDate = dateRangePickerObject.startDate;
    window.endDate = dateRangePickerObject.endDate;
}

function getFontSize(width) {
    if (width > 300) {
        return '13px';
    } else if (width > 250) {
        return '8px';
    } else {
        return '6px';
    }
}

// tslint:disable-next-line:max-func-body-length
function InitializeComponet() {
    if (document.getElementById('user-name')) {
        document.getElementById('user-name').textContent = window.userName;
    }
    cardUpdate();
    /* tslint:disable-next-line */

    gridObj = document.getElementById("recentexpense-grid").ej2_instances[0];
    gridObj.dataSource = dataSource;
    gridObj.query = new ej.data.Query().where(predicate).sortByDesc('DateTime').take(5);
    gridObj.refresh();
}

function load(args) {
    if (document.getElementById('grid-popup')) {
        document.getElementById('grid-popup').style.display = "block";
    }
}
function dataBound(args) {
    if (document.getElementById('grid-popup')) {
        document.getElementById('grid-popup').style.display = "none";
    }
}

window.dashboard = function () {

    predicateStart = new ej.data.Predicate('DateTime', 'greaterthanorequal', window.startDate);
    predicateEnd = new ej.data.Predicate('DateTime', 'lessthanorequal', window.endDate);
    predicate = predicateStart.and(predicateEnd);
    InitializeComponet();
    // DateRangePicker Initialization.
    DateRange();
    //formatRangeDate();
    //updateChart();
    window.addEventListener('resize', function () {
        setTimeout(function () {
            //updateChart();
        }, 1000);
    });
};

function formatRangeDate() {
    var intl = new ej.base.Internationalization();
    var dateStart = intl.formatDate(dateRangePickerObject.startDate, { skeleton: 'MMMd' });
    var dateEnd = intl.formatDate(dateRangePickerObject.endDate, { skeleton: 'MMMd' });
    document.getElementById('rangeDate').textContent = dateStart + ' - ' + dateEnd;
}