class CodeClauseTimer{
    constructor(obj_num){
        
        this.flag = true
        this.main = document.getElementById("main")
        this.obj_num = obj_num
        if(obj_num > 1){
            this.main.innerHTML += `<div id="t${obj_num}">
            HH:<input type="number" id="t${obj_num}h" min="00" value="00"/> MM:<input type="number" id="t${obj_num}m" min="00" max="60" value="00"/>SS:<input type="number" id="t${obj_num}s" min="00" max="60" value="00"><input type="button" value="start" id="startBtn${this.obj_num}"></div>
        </div>`
        }
        this.startBtn = document.getElementById("startBtn" + obj_num)
        this.startBtn.addEventListener('click', ()=>{this.makeTimer()})
    }
    
    makeTimer() {
        document.getElementById(`t${this.obj_num}`).style.display = "none"
        // this.addTimer.style.display = "block"
        this.main.innerHTML += `<div style="display:flex"><div class="run" id="hh${this.obj_num}">0</div> <span class="spans">:</span> <div class="run" id="mm${this.obj_num}">0</div><span class="spans">:</span> <div class="run" id="ss${this.obj_num}">0</div><span class="spans">:</span><div class="run" id="ms${this.obj_num}">0</div><input type="button" value="pause" id="control"/><input type="button" value="reset" id="reset"/></div>`
        this.control = document.getElementById("control")
        this.control.addEventListener('click', ()=>{this.make_control()})
        this.reset = document.getElementById('reset')
        this.reset.addEventListener('click', ()=>{this.resetWatch()})
        this.hh = 0
        this.mm = 0
        this.ss = 0
        this.ms = 0
        this.hhdiv = document.getElementById("hh" + this.obj_num)
        this.mmdiv = document.getElementById("mm" + this.obj_num)
        this.ssdiv = document.getElementById("ss" + this.obj_num)
        this.msdiv = document.getElementById("ms" + this.obj_num)
        this.my_inter = setInterval(()=>{this.runTimer()}, 100)
    }
    resetWatch(){
        if(this.flag != false){
            this.make_control()
        }
        this.hh = 0
        this.mm = 0
        this.ss = 0
        this.ms =0
        this.modifyTimer()
    }

    runTimer(){
        if(this.flag == true){
            this.modifyTimer()
        if(this.ms == 9){
        if(this.ss == 59)
        {
            if(this.mm == 59)
            {
                if(this.hh==0){
                    this.hh = this.hh + 1
                    this.mm = 0
                }
                else{
                    clearInterval(this.my_inter)
                }
            }
            else{
                this.mm = this.mm+1
            }
            this.ss = 0
            
        }
        this.ss = this.ss + 1
        this.ms = 0
    }this.ms = this.ms+1
        }
    }

    modifyTimer(){
        this.hhdiv.innerHTML = this.hh
        this.mmdiv.innerHTML = this.mm
        this.ssdiv.innerHTML = this.ss
        this.msdiv.innerHTML = this.ms
    }

    make_control(){
        if(this.control.value == "pause"){
            this.flag = false
            this.control.value = "play"
            this.control.style.backgroundColor = "green"
        }
        else{
            this.flag = true
            this.control.value = "pause"
            this.control.style.backgroundColor = "#ff7570"
        }

    }
}
var obj_count = 1
var objects = []
objects[1] = new CodeClauseTimer(obj_count)
function addNew()
{
    obj_count +=1
    objects[obj_count] = new CodeClauseTimer(obj_count)
}