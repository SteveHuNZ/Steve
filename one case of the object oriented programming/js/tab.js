var that;
class Tab {
    constructor(id) {
        // get the elements
        that = this;
        this.main = document.querySelector(id);

        this.add = this.main.querySelector('.tabadd');

        this.ul = this.main.querySelector('.firstnav ul:first-child');
        this.fsection = this.main.querySelector('.tabscon');
        this.init();

    }
    init() {
        // initialnasition,add connections between elements and events
        this.updateNode();
        this.add.onclick = this.addTab;
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;



        }

    };
    // get all the lis and sections 
    updateNode() {
            this.lis = this.main.querySelectorAll('li');
            this.sections = this.main.querySelectorAll('section');
            this.remove = this.main.querySelectorAll('.icon-guanbi');

        }
        // 1 . the function of toggle
    toggleTab() {
        // console.log(this.index);
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    clearClass() {
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = "";
                this.sections[i].className = "";
            }
        }
        // 2. the function of add
    addTab() {
        // alert(132)
        that.clearClass();
        var random = Math.random();
        var li = '<li class="liactive"> <span>new Test</span><span class="iconfont icon-guanbi"></span></li>';
        var section = '<section class="conactive">new content' + random + ' </section>';
        that.ul.insertAdjacentHTML('beforeend', li);
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init();
    }

    // 3. the function of remove 
    removeTab(e) {
            e.stopPropagation();
            var index = this.parentNode.index;
            // console.log(index);
            //  base on the index, delete all the lis and sections
            that.lis[index].remove();
            that.sections[index].remove();
            that.init();
            // if the li we delected which's state is not chosen,the displayed one should keep no change
            if (document.querySelector('.liactive')) return;
            // when we delete a li , let the li which was before this one to be displayed 
            index--;
            that.lis[index] && that.lis[index].click();
        }
        // 4. the function  of edit
    editTab() {}
}
new Tab('#tab');