var sampleDoc = File("C:\\s.jpg");
    open(sampleDoc);
var document = app.activeDocument;
var layer = app.activeDocument.activeLayer;
//复制图层
layer.copy();
layer = app.activeDocument.paste();
//去色
layer.desaturate();
//再复制
layer.copy();
 layer = app.activeDocument.paste();
//反相
layer.invert();
app.activeDocument.activeLayer = layer;
//颜色颜色减淡
colorDodgeStyle();
 //滤镜最小值
//layer.applyMaximum(radius);
layer.applyMinimum(2);
//自定义
nextLayerColorStyle(85);
//合并图层
layer.merge();
//在背景图层上创建一个新图层
var layers = app.activeDocument.artLayers;
var newLayer = app.activeDocument.artLayers.add();
newLayer.move(layers[1], ElementPlacement.PLACEAFTER);
app.activeDocument.activeLayer = newLayer;
//fillSolidColour(240,240,240);
setFrontColor (240,240,240);
fillFrontColor ();
var layers = app.activeDocument.artLayers;
app.activeDocument.activeLayer = layers[0];
layers[0].merge();
saveJpeg("C:\\ss.jpeg",80)
//var layers = app.activeDocument.artLayers;
//layers[2].merge();


function colorDodgeStyle() {
    var idsetd = charIDToTypeID("setd");
    var desc10 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref5 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref5.putEnumerated(idLyr, idOrdn, idTrgt);
    desc10.putReference(idnull, ref5);
    var idT = charIDToTypeID("T   ");
    var desc11 = new ActionDescriptor();
    var idMd = charIDToTypeID("Md  ");
    var idBlnM = charIDToTypeID("BlnM");
    var idCDdg = charIDToTypeID("CDdg");
    desc11.putEnumerated(idMd, idBlnM, idCDdg);
    var idLyr = charIDToTypeID("Lyr ");
    desc10.putObject(idT, idLyr, desc11);
    executeAction(idsetd, desc10, DialogModes.NO);
}

function fillSolidColour(R, G, B)
{
    // =======================================================
    var id117 = charIDToTypeID( "Mk  " );
    var desc25 = new ActionDescriptor();
    var id118 = charIDToTypeID( "null" );
    var ref13 = new ActionReference();
    var id119 = stringIDToTypeID( "contentLayer" );
    ref13.putClass( id119 );
    desc25.putReference( id118, ref13 );
    var id120 = charIDToTypeID( "Usng" );
    var desc26 = new ActionDescriptor();
    var id121 = charIDToTypeID( "Type" );
    var desc27 = new ActionDescriptor();
    var id122 = charIDToTypeID( "Clr " );
    var desc28 = new ActionDescriptor();
    var id123 = charIDToTypeID( "Rd  " );
    desc28.putDouble( id123, R ); //red
    var id124 = charIDToTypeID( "Grn " );
    desc28.putDouble( id124, G ); //green
    var id125 = charIDToTypeID( "Bl  " );
    desc28.putDouble( id125, B ); //blue
    var id126 = charIDToTypeID( "RGBC" );
    desc27.putObject( id122, id126, desc28 );
    var id127 = stringIDToTypeID( "solidColorLayer" );
    desc26.putObject( id121, id127, desc27 );
    var id128 = stringIDToTypeID( "contentLayer" );
    desc25.putObject( id120, id128, desc26 );
    executeAction( id117, desc25, DialogModes.NO );
}
function setFrontColor(r,g,b)
{
    var idsetd = charIDToTypeID( "setd" );
    var desc11 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref8 = new ActionReference();
    var idClr = charIDToTypeID( "Clr " );
    var idFrgC = charIDToTypeID( "FrgC" );
    ref8.putProperty( idClr, idFrgC );
    desc11.putReference( idnull, ref8 );
    var idT = charIDToTypeID( "T   " );
    var desc12 = new ActionDescriptor();
    var idRd = charIDToTypeID( "Rd  " );
    desc12.putDouble( idRd, r );
    var idGrn = charIDToTypeID( "Grn " );
    desc12.putDouble( idGrn, g );
    var idBl = charIDToTypeID( "Bl  " );
    desc12.putDouble( idBl, b );
    var idRGBC = charIDToTypeID( "RGBC" );
    desc11.putObject( idT, idRGBC, desc12 );
    executeAction( idsetd, desc11, DialogModes.NO );
}

function saveJpeg(path,quality)
{
    
    //定义一个变量[document]，用来表示Photoshop当前的活动文档。
var document = app.activeDocument;

//定义一个变量[fileOut]，用来表示导出后的GIF图片路径。
var fileOut = new File(path);

//定义一个变量[exportOptionsSaveForWeb]，用来表示导出文档为Web格式的设置属性。
var exportOptionsSaveForWeb = new ExportOptionsSaveForWeb();

//设置导出文档时，图片将被存储为.jpeg格式。
exportOptionsSaveForWeb.format = SaveDocumentType.JPEG;

//设置导出文档时，图片的压缩质量。数字范围为1至100。
exportOptionsSaveForWeb.quality = quality;  

//调用[document]的[exportDocument]方法，使用上面设置的各种参数，将当前文档导出并转换为JPEG格式的文档。
document.exportDocument(fileOut, ExportType.SAVEFORWEB, exportOptionsSaveForWeb);
    
    }

function fillFrontColor()
{
    var idFl = charIDToTypeID( "Fl  " );
    var desc8 = new ActionDescriptor();
    var idUsng = charIDToTypeID( "Usng" );
    var idFlCn = charIDToTypeID( "FlCn" );
    var idFrgC = charIDToTypeID( "FrgC" );
    desc8.putEnumerated( idUsng, idFlCn, idFrgC );
    executeAction( idFl, desc8, DialogModes.NO );
    }

function  nextLayerColorStyle(color)
{
    var idsetd = charIDToTypeID( "setd" );
    var desc14 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref8 = new ActionReference();
    var idLyr = charIDToTypeID( "Lyr " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idTrgt = charIDToTypeID( "Trgt" );
    ref8.putEnumerated( idLyr, idOrdn, idTrgt );
    desc14.putReference( idnull, ref8 );
    var idT = charIDToTypeID( "T   " );
    var desc15 = new ActionDescriptor();
    var idBlnd = charIDToTypeID( "Blnd" );
    var list1 = new ActionList();
    var desc16 = new ActionDescriptor();
    var idChnl = charIDToTypeID( "Chnl" );
    var ref9 = new ActionReference();
    var idChnl = charIDToTypeID( "Chnl" );
    var idChnl = charIDToTypeID( "Chnl" );
    var idGry = charIDToTypeID( "Gry " );
    ref9.putEnumerated( idChnl, idChnl, idGry );
    desc16.putReference( idChnl, ref9 );
    var idSrcB = charIDToTypeID( "SrcB" );
    desc16.putInteger( idSrcB, 0 );
    var idSrcl = charIDToTypeID( "Srcl" );
    desc16.putInteger( idSrcl, 0 );
    var idSrcW = charIDToTypeID( "SrcW" );
    desc16.putInteger( idSrcW, 255 );
    var idSrcm = charIDToTypeID( "Srcm" );
    desc16.putInteger( idSrcm, 255 );
    var idDstB = charIDToTypeID( "DstB" );
    desc16.putInteger( idDstB, 0 );
    var idDstl = charIDToTypeID( "Dstl" );
    desc16.putInteger( idDstl, color );
    var idDstW = charIDToTypeID( "DstW" );
    desc16.putInteger( idDstW, 255 );
    var idDstt = charIDToTypeID( "Dstt" );
    desc16.putInteger( idDstt, 255 );
    var idBlnd = charIDToTypeID( "Blnd" );
    list1.putObject( idBlnd, desc16 );
    desc15.putList( idBlnd, list1 );
    var idLefx = charIDToTypeID( "Lefx" );
    var desc17 = new ActionDescriptor();
    var idScl = charIDToTypeID( "Scl " );
    var idPrc = charIDToTypeID( "#Prc" );
    desc17.putUnitDouble( idScl, idPrc, 100.000000 );
    var idLefx = charIDToTypeID( "Lefx" );
    desc15.putObject( idLefx, idLefx, desc17 );
    var idLyr = charIDToTypeID( "Lyr " );
    desc14.putObject( idT, idLyr, desc15 );
    executeAction( idsetd, desc14, DialogModes.NO );
}
