<!-- From Uiverse.io by Yaya12085 -->
<template>
    <div class="radio-inputs">
        <label>
            <input class="radio-input" type="radio" name="time" :value="0" v-model="diningTime"
                @change="changeDiningTime">
            <span class="radio-tile">
                <span class="radio-icon">
                    <!-- From https://www.iconfont.cn/ 1733339028789 -->
                    <svg stroke="currentColor" xml:space="preserve" viewBox="0 0 1024 1024"
                        xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Capa_1"
                        version="1.1" width="200px" height="200px" fill="none">
                        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                        <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M231.2192 517.12h188.3136a20.48 20.48 0 0 0 0-40.96H231.2192a20.48 20.48 0 0 0 0 40.96zM278.528 665.1392a20.48 20.48 0 1 0 0-40.96h-47.3088a20.48 20.48 0 0 0 0 40.96z">
                            </path>
                            <path
                                d="M809.4208 644.5056v-261.12a60.3648 60.3648 0 0 0-15.36-40.0384l-93.7984-106.6496a19.5584 19.5584 0 0 1-5.12-12.9536V159.232A60.672 60.672 0 0 0 634.88 98.6624H276.48a60.672 60.672 0 0 0-60.6208 60.5184v62.208a19.6096 19.6096 0 0 1-5.5296 13.6192L107.52 340.8896a60.2624 60.2624 0 0 0-17.1008 42.1376V829.44a60.672 60.672 0 0 0 60.6208 60.5184h105.3696c60.4672 51.2 190.72 56.6272 331.4688 56.6272 193.4336 0 367.0016-10.24 367.0016-135.1168 0-69.0688-56.576-129.3312-145.4592-166.9632z m-46.08-273.8688a19.5584 19.5584 0 0 1 5.12 12.9536v245.76a607.232 607.232 0 0 0-180.5824-26.112h-16.896V386.5088a19.5072 19.5072 0 0 1 5.12-13.5168l98.304-103.3728zM276.48 139.6224h358.4a19.6608 19.6608 0 0 1 19.6096 19.6096v58.8288H256.768V159.232A19.6608 19.6608 0 0 1 276.48 139.6224zM131.4304 829.44V383.0272a19.3024 19.3024 0 0 1 5.5296-13.6192l102.7072-105.8816a55.1424 55.1424 0 0 0 3.9424-4.5056h384.6144l-81.5616 85.76a60.2624 60.2624 0 0 0-16.64 41.728v219.392c-177.3568 15.36-309.1456 100.096-309.1456 205.568a108.1856 108.1856 0 0 0 6.4 37.5296H151.04a19.6608 19.6608 0 0 1-19.6096-19.5584z m456.448 76.2368c-201.2672 0-326.0416-15.7184-326.0416-94.1568 0-46.08 38.912-88.6784 100.352-119.296 16.7936 7.168 61.44 30.1056 56.32 70.0416a20.48 20.48 0 0 0 17.664 22.9376 15.36 15.36 0 0 0 2.6624 0 20.48 20.48 0 0 0 20.48-17.8688c5.9904-46.08-22.2208-76.8-48.64-95.232A515.84 515.84 0 0 1 504.9344 650.24c16.5376 8.9088 86.016 49.5104 73.0624 97.5872a20.48 20.48 0 0 0 14.3872 25.088 19.4048 19.4048 0 0 0 5.12 0.7168 20.48 20.48 0 0 0 19.7632-15.36c13.2096-48.896-17.152-88.064-47.5648-113.7152h17.92a601.1904 601.1904 0 0 1 70.7584 4.1984c12.4928 8.6016 68.4032 50.0224 53.76 91.4432a20.48 20.48 0 0 0 12.4928 26.112 19.8656 19.8656 0 0 0 6.8096 1.1776 20.48 20.48 0 0 0 19.3024-13.6192c12.4416-35.1232-0.512-66.8672-18.7904-91.392 106.6496 27.8528 181.7088 84.9408 181.7088 149.1456 0.256 78.2848-124.4672 94.0032-325.7856 94.0032z">
                            </path>
                        </g>
                    </svg>
                </span>
                <span class="radio-label">早餐</span>
            </span>
        </label>
        <label>
            <input checked="true" class="radio-input" type="radio" name="time" :value="1" v-model="diningTime"
                @change="changeDiningTime">
            <span class="radio-tile">
                <span class="radio-icon">
                    <!-- From https://www.iconfont.cn/ 1733339362804 -->
                    <svg stroke="currentColor" xml:space="preserve" viewBox="0 0 1049 1024"
                        xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Capa_2"
                        version="1.1" width="200px" height="200px" fill="none">
                        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                        <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M945.636426 486.293045h-283.06392V208.275339l289.985386-91.491506c11.359873-3.585593 12.957135-20.415733 9.371542-31.780318-3.595016-11.369297-15.713471-22.385217-27.068632-18.799624l-858.685808 270.921907c-11.364585 3.585593-17.66882 20.415733-14.083228 31.780318 2.902398 9.206633 16.118676 19.803214 25.282904 19.803214 2.148529 0 4.339462-0.320395 6.497414-1.003589l76.230357-25.537335v124.12935H22.607843a21.49942 21.49942 0 0 0-21.574807 21.485286c0 137.82622 43.027111 264.72133 121.1657 357.48499 87.495997 103.88795 212.652495 158.79322 361.923399 158.79322 149.270904 0 274.427401-54.867576 361.923398-158.741391 78.13859-92.763661 121.1657-219.710599 121.1657-357.536819a21.494709 21.494709 0 0 0-21.574807-21.489997z m-335.523825 0h-57.89719V243.089982l57.89719-21.235566v264.438629z m-279.704489 0V313.072645l56.785232-20.891613v194.107301H330.408112v0.004712z m109.249848-207.686379l60.097547-21.932895v229.619274H439.65796V278.606666zM222.562346 348.589329l55.390573-21.932896v159.636612H222.562346V348.589329z m579.782305 485.058583c-75.330425 89.446635-188.457991 141.411812-318.222516 141.411812s-247.599065-51.969889-322.929491-141.421235C96.812176 757.210241 59.721789 653.510758 55.735703 539.912024h852.070602c-4.000221 113.594022-41.081185 217.30764-105.461654 293.735888z">
                            </path>
                        </g>
                    </svg>
                </span>
                <span class="radio-label">午餐</span>
            </span>
        </label>
        <label>
            <input class="radio-input" type="radio" name="time" :value="2" v-model="diningTime"
                @change="changeDiningTime">
            <span class="radio-tile">
                <span class="radio-icon">
                    <!-- From https://www.iconfont.cn/ 1733339481644 -->
                    <svg stroke="currentColor" xml:space="preserve" viewBox="0 0 1024 1024"
                        xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Capa_3"
                        version="1.1" width="200px" height="200px" fill="none">
                        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                        <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M911.865083 729.518059c1.344624-13.45136 2.018983-26.732851 2.018983-40.171931 0-196.99463-142.6847-361.2803-330.120626-394.926608 14.121626-16.413831 22.669302-37.753859 22.669302-61.054541 0-51.687196-42.049698-93.737918-93.736894-93.737918s-93.738941 42.050722-93.738941 93.737918c0 23.301705 8.5487 44.641733 22.670326 61.056588-187.437973 33.651424-330.12165 197.965747-330.12165 394.972657 0 13.693884 0.697895 27.215852 2.096754 40.932248-28.26781 12.361539-48.079018 40.582277-48.079018 73.355705 0 44.128033 35.901675 80.030731 80.030731 80.030731l736.282113 0c44.128033 0 80.030731-35.902698 80.030731-80.030731C961.866894 770.169921 941.154153 741.421156 911.865083 729.518059zM512.695848 179.642426c29.622668 0 53.721529 24.099884 53.721529 53.722552 0 29.622668-24.098861 53.722552-53.721529 53.722552s-53.723575-24.099884-53.723575-53.722552C458.972273 203.742311 483.07318 179.642426 512.695848 179.642426zM512.695848 328.172251c199.151759 0 361.172853 162.099888 361.172853 361.279277 0 11.414981-0.532119 22.1116-1.609661 34.199916l-719.128431 0c-1.078565-12.087293-1.609661-22.745027-1.609661-34.146705C151.520949 490.311025 313.543066 328.172251 512.695848 328.172251zM881.836163 843.696518 145.55405 843.696518c-22.064528 0-40.015366-17.949814-40.015366-40.015366 0-20.293185 15.186887-37.093826 34.789341-39.663348l746.733139 0c19.603477 2.569522 34.789341 19.370163 34.789341 39.663348C921.851529 825.746704 903.901715 843.696518 881.836163 843.696518z"
                                fill="#272636" p-id="11109"></path>
                            <path
                                d="M276.604782 532.577664c11.04966 0 20.007683-8.958022 20.007683-20.007683 0-11.234879 14.693654-34.618449 46.955428-59.415204 31.281447-24.042579 62.460564-36.621059 77.091796-36.621059 11.04966 0 20.007683-8.956999 20.007683-20.007683s-8.958022-20.007683-20.007683-20.007683c-31.737842 0-73.228815 23.199375-101.476159 44.909839-18.817578 14.46341-62.58643 52.297087-62.58643 91.14179C256.597099 523.619642 265.554098 532.577664 276.604782 532.577664z">
                            </path>
                        </g>
                    </svg>
                </span>
                <span class="radio-label">晚餐</span>
            </span>
        </label>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const diningTime = ref(1);
const changeDiningTime = () => {
    store.commit('setDiningTime', diningTime.value);
}
</script>

<style scoped>
/* From Uiverse.io by Yaya12085  */
.radio-inputs {
    display: flex;
    justify-content: center;
    align-items: center;
    /* max-width: 350px; */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.radio-inputs>* {
    margin: 6px;
}

.radio-input:checked+.radio-tile {
    border-color: #2260ff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #2260ff;
}

.radio-input:checked+.radio-tile:before {
    transform: scale(1);
    opacity: 1;
    background-color: #2260ff;
    border-color: #2260ff;
}

.radio-input:checked+.radio-tile .radio-icon svg {
    fill: #2260ff;
}

.radio-input:checked+.radio-tile .radio-label {
    color: #2260ff;
}

.radio-input:focus+.radio-tile {
    border-color: #2260ff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 0 0 4px #b5c9fc;
}

.radio-input:focus+.radio-tile:before {
    transform: scale(1);
    opacity: 1;
}

.radio-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;
    min-height: 80px;
    border-radius: 0.5rem;
    border: 2px solid #b5bfd9;
    background-color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transition: 0.15s ease;
    cursor: pointer;
    position: relative;
}

.radio-tile:before {
    content: "";
    position: absolute;
    display: block;
    width: 0.75rem;
    height: 0.75rem;
    border: 2px solid #b5bfd9;
    background-color: #fff;
    border-radius: 50%;
    top: 0.25rem;
    left: 0.25rem;
    opacity: 0;
    transform: scale(0);
    transition: 0.25s ease;
}

.radio-tile:hover {
    border-color: #2260ff;
}

.radio-tile:hover:before {
    transform: scale(1);
    opacity: 1;
}

.radio-icon svg {
    width: 2rem;
    height: 2rem;
    fill: #494949;
}

.radio-label {
    color: #707070;
    transition: 0.375s ease;
    text-align: center;
    font-size: 13px;
}

.radio-input {
    clip: rect(0 0 0 0);
    -webkit-clip-path: inset(100%);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}
</style>
