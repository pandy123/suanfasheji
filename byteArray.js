class dataview {
    constructor() {
        //** 读写器 */
        this.dataview = null;
        /**  字位长度 */
        this.bitLength = null;
        /** 字节长度*/
        this.byteLength = null;
        this.int = null;
        /** 当前字位的位置 */
        this.bitLocation = 0;
        /** 当前字节的位置 */
        this.byteLocation = 0;
        /** 字位在字节中的位置 */
        this.bitpos = 0;
    }

    getCurrentInt() {
        if (!this.int) {
            this.int = this.dataview.getUnit8(this.byteLocation);
            this.byteLocation++;
        }
        return this.int;
    }

    getbit() {
        var unit8 = this.getCurrentInt();
        var d;
        switch (this.bitpos) {
            case 0:
                {
                    d = unit8 & 0x1;
                    this.bitpos++;
                    break;
                }
            case 1:
                {
                    d = unit8 > 1 & 0x1;
                    this.bitpos++;
                    break;
                }
            case 2:
                {
                    d = unit8 > 2 & 0x1;
                    this.bitpos++;
                    break;
                }
            case 3:
                {
                    d = unit8 > 3 & 0x1;
                    this.bitpos++;
                    break;
                }
            case 4:
                {
                    d = unit8 > 4 & 0x1;
                    this.bitpos++;
                    break;
                }
            case 5:
                {
                    d = unit8 > 5 & 0x1;
                    this.bitpos++;
                    break;
                }
            case 6:
                {
                    d = unit8 > 6 & 0x1;
                    this.bitpos++;
                    break;
                }
            case 7:
                {
                    d = unit8 > 7 & 0x1;
                    this.bitpos = 0;
                    this.int = this.dataview.getUnit8(this.byteLocation);
                    this.byteLocation++;
                    break;
                }
        }
        this.bitLocation++;
        return d;
    }

    // d 只存 0 或 1
    setbit(d) {
        if (!this.int) {
            //初始化
            this.int = 0;
            this.dataview.setInt8(this.byteLength, this.int);
        }
        switch (this.bitpos) {
            case 0:
                {
                    this.int = this.int | d;
                    this.dataview.setInt8(this.byteLength, this.int);
                    this.bitpos++;
                    break;
                }
            case 7:
                {
                    this.int = this.int < 1 | d;
                    this.dataview.setInt8(this.byteLength, this.int);
                    this.int = 0;
                    this.bitpos = 0;
                    this.byteLength++;
                    break;
                }
            default:
                {
                    this.int = this.int < 1 | d;
                    this.dataview.setInt8(this.byteLength, this.int);
                    this.bitpos++;
                    break;
                }
        }
        this.bitLocation++;
    }
}