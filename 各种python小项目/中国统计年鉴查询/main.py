from PyQt5 import QtWidgets, QtCore, QtGui
import sys,os
from cxsj import Ui_MainWindow
import tjnjcx
from tjnjcx import go
from PyQt5.QtWidgets import QFileDialog,QMessageBox
import ok


class Goago(QtCore.QThread):
    finishSignal = QtCore.pyqtSignal(list)

    def __init__(self, t, parent=None):
        super(Goago, self).__init__(parent)
        self.t = t

    def run(self):
        s = self.t[0]
        p = self.t[1]
        tjnjcx.data['s'] = s
        tjnjcx.maxpage = int(p)
        result = go()
        self.finishSignal.emit(result)


class mywindow(QtWidgets.QMainWindow, Ui_MainWindow):
    def __init__(self):
        super(mywindow, self).__init__()
        self.setupUi(self)
        self.spinBox.setValue(20)
        self.ok_window = ok.Ui_Dialog()
        if os.path.exists('d:/tjnj_use.txt'):
            a=open('d:/tjnj_use.txt','r')
            default=a.readlines()
            a.close()
            for each in default:
                self.comboBox.addItem(each)

    # 定义槽函数
    def cx(self):
        # self.textBrowser.setText(self.spinBox.text())
        self.textBrowser.setText("查询中......请稍后")
        add=self.lineEdit.text()
        exsits=[]
        if os.path.exists('d:/tjnj_use.txt'):
            a = open('d:/tjnj_use.txt', 'r+')
            exsits = a.readlines()
            a.close()
        # pd=add+'\n'
        add=add.replace('\n','')
        if  add+'\n' not in exsits:
            a=open('d:/tjnj_use.txt','a+')
            a.writelines(add+'\n')
            self.comboBox.addItem(add)
            a.close()
        self.startx = Goago([self.lineEdit.text(), self.spinBox.text()])
        self.startx.finishSignal.connect(self.handle)
        self.startx.start()

    def msg(self):

        fileName2, ok2 = QFileDialog.getSaveFileName(self,
                                                     "文件保存",
                                                     "C:/",
                                                     "All Files (*);;Text Files (*.txt)")
        # print(fileName2+'\n'+ok2)
        file=self.textBrowser.toPlainText()
        a=open(fileName2,'w')
        a.writelines(file)
        a.close()

    def shows(self):
        self.lineEdit.setText(self.comboBox.currentText())

    def handle(self, ls):
        self.textBrowser.setText("")
        for i in ls:
            self.textBrowser.append(i[0].ljust(10) + '\t' + i[1].ljust(10) + '\t' + i[2].ljust(13) + '\t' + i[3])

    def del_file(self):
        apply=QMessageBox.question(self,
                                   '确认',
                                   '是否确认删除查询记录？',
                                   QMessageBox.Yes | QMessageBox.No)
        if apply==QMessageBox.Yes:
            os.remove('d:/tjnj_use.txt')
            self.comboBox.clear()
            self.lineEdit.setText('')



if __name__ == "__main__":
    app = QtWidgets.QApplication(sys.argv)
    window = mywindow()
    window.show()
    sys.exit(app.exec_())
