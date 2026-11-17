const chapters = {
  vector: {
    title:"VEKTOR", subtitle:"Besar, arah, komponen, dan resultan",
    history:`Konsep vektor muncul dari kebutuhan untuk menjelaskan besaran fisika yang tidak cukup dinyatakan dengan satu angka. Dalam kehidupan sehari-hari kita dapat mengatakan seseorang berjalan 20 meter, tetapi informasi itu belum lengkap jika yang ingin diketahui adalah perpindahannya. Perpindahan membutuhkan besar sekaligus arah. Perkembangan geometri analitik dan mekanika klasik membuat representasi besaran berarah menjadi semakin sistematis. Vektor kemudian menjadi bahasa penting dalam mekanika, elektromagnetisme, teknik, navigasi, komputer grafis, dan simulasi.`,
    definition:`Vektor adalah besaran yang mempunyai besar (magnitude) dan arah. Skalar hanya mempunyai besar. Contoh besaran vektor adalah perpindahan, kecepatan, percepatan, gaya, dan momentum. Contoh skalar adalah massa, waktu, suhu, energi, dan jarak. Secara grafis, vektor digambarkan sebagai anak panah: panjang panah menyatakan besar, sedangkan arah ujung panah menyatakan arah vektor. Vektor dapat ditulis dengan huruf tebal atau tanda panah, misalnya \\(\\vec A\\).`,
    characteristics:`Beberapa ciri penting vektor adalah memiliki besar dan arah, dapat dipindahkan sejajar tanpa mengubah nilainya, dapat diuraikan menjadi komponen, serta dapat dijumlahkan atau dikurangkan menggunakan aturan vektor. Jika vektor berada pada bidang dua dimensi, biasanya digunakan sumbu-x dan sumbu-y. Komponen-komponen tersebut dapat bernilai positif atau negatif bergantung pada arah terhadap sumbu acuan.`,
    types:`Jenis vektor yang umum dipelajari meliputi vektor nol, vektor satuan, vektor posisi, vektor sejajar, vektor berlawanan arah, vektor sama, dan vektor resultan. Vektor nol memiliki besar nol. Vektor satuan memiliki besar satu dan digunakan untuk menyatakan arah, misalnya \\(\\hat i\\), \\(\\hat j\\), dan \\(\\hat k\\). Vektor resultan adalah satu vektor yang mewakili gabungan beberapa vektor.`,
    factors:`Hasil operasi vektor dipengaruhi oleh besar masing-masing vektor, arah setiap vektor, sudut antara dua vektor, dan sistem koordinat yang digunakan. Dua vektor yang searah menghasilkan resultan lebih besar, sedangkan dua vektor berlawanan arah dapat saling mengurangi. Untuk vektor yang saling tegak lurus, besar resultan dapat dihitung dengan teorema Pythagoras.`,
    application:`Vektor digunakan untuk menentukan perpindahan, kecepatan pesawat terhadap angin, gaya pada benda, navigasi GPS, resultan gaya pada jembatan, arah arus sungai, dan gerak robot. Misalnya seseorang berjalan 30 m ke timur kemudian 40 m ke utara. Jarak yang ditempuh adalah 70 m, sedangkan besar perpindahannya adalah 50 m karena perpindahan memperhitungkan posisi awal dan akhir beserta arahnya.`,
    example:`Sebuah benda mendapat gaya \\(\\vec F_1=6\\hat i+8\\hat j\\) N dan \\(\\vec F_2=2\\hat i-3\\hat j\\) N. Tentukan gaya resultan, besar, dan arahnya.`,
    solution:`Jumlahkan komponen sejenis: \\(R_x=6+2=8\\) N dan \\(R_y=8-3=5\\) N. Jadi \\(\\vec R=8\\hat i+5\\hat j\\) N. Besarnya \\(R=\\sqrt{8^2+5^2}=\\sqrt{89}\\approx9,43\\) N. Arah terhadap sumbu-x adalah \\(\\theta=\\tan^{-1}(5/8)\\approx32,0^\\circ\\).`,
    mistakes:`Kesalahan yang sering terjadi adalah menjumlahkan semua angka tanpa memperhatikan arah, mencampur komponen x dan y, lupa memberikan tanda negatif pada arah berlawanan, atau menggunakan \\(\\tan^{-1}\\) tanpa memeriksa kuadran. Saat menyelesaikan soal, tentukan sumbu positif terlebih dahulu kemudian uraikan setiap vektor ke komponennya.`,
    summary:[`Vektor mempunyai besar dan arah, sedangkan skalar hanya mempunyai besar.`,`Vektor dapat digambarkan dengan anak panah; panjang menunjukkan besar dan ujung panah menunjukkan arah.`,`Pada dua dimensi, vektor dapat diuraikan menjadi komponen x dan y.`,`Penjumlahan vektor dilakukan dengan menjumlahkan komponen yang sejenis.`,`Besar vektor dua dimensi dihitung dengan \\(|\\vec A|=\\sqrt{A_x^2+A_y^2}\\).`,`Arah vektor dapat dicari dari perbandingan komponen dengan fungsi tangen.`,`Arah sangat penting karena dua vektor yang sama besar dapat menghasilkan resultan berbeda jika arahnya berbeda.`,`Vektor banyak digunakan dalam gaya, perpindahan, kecepatan, navigasi, dan teknik.`]
  },
  kinematics: {
    title:"KINEMATIKA", subtitle:"Mendeskripsikan gerak tanpa membahas penyebabnya",
    history:`Kinematika berkembang dari usaha ilmuwan untuk mengukur gerak secara kuantitatif. Galileo Galilei berperan penting dalam kajian gerak jatuh dan gerak benda, sedangkan perkembangan matematika membuat posisi, kecepatan, dan percepatan dapat dinyatakan dengan persamaan dan grafik. Kinematika kemudian menjadi dasar untuk mempelajari gerak kendaraan, benda jatuh, olahraga, robotika, dan sistem navigasi.`,
    definition:`Kinematika adalah cabang mekanika yang mempelajari bagaimana suatu benda bergerak tanpa terlebih dahulu membahas penyebab geraknya. Besaran utama dalam kinematika adalah posisi, jarak, perpindahan, kelajuan, kecepatan, dan percepatan. Posisi menyatakan letak benda terhadap titik acuan, sedangkan perpindahan menyatakan perubahan posisi dari keadaan awal ke keadaan akhir.`,
    characteristics:`Gerak selalu dinyatakan terhadap kerangka acuan. Benda dapat dianggap bergerak oleh satu pengamat tetapi tampak diam bagi pengamat lain yang bergerak bersama benda tersebut. Kecepatan merupakan laju perubahan posisi, sedangkan percepatan merupakan laju perubahan kecepatan. Tanda positif dan negatif pada kecepatan atau percepatan menunjukkan arah terhadap sumbu yang dipilih.`,
    types:`Gerak lurus beraturan (GLB) memiliki kecepatan konstan dan percepatan nol. Gerak lurus berubah beraturan (GLBB) memiliki percepatan konstan. Gerak vertikal ke atas, jatuh bebas, dan gerak parabola merupakan contoh gerak yang dipengaruhi gravitasi. Pemilihan persamaan harus disesuaikan dengan karakteristik gerak yang sedang dianalisis.`,
    factors:`Posisi akhir benda ditentukan oleh posisi awal, kecepatan awal, percepatan, waktu, dan arah. Pada GLBB, semakin besar percepatan dengan waktu yang sama, perubahan kecepatan semakin besar. Grafik posisi-waktu memberikan informasi kecepatan melalui kemiringan grafik, sedangkan grafik kecepatan-waktu memberikan informasi percepatan melalui kemiringan dan perpindahan melalui luas di bawah grafik.`,
    application:`Kinematika digunakan untuk menentukan jarak pengereman, waktu tempuh kendaraan, posisi benda yang dilempar, lintasan atlet, gerak lift, pergerakan robot, dan prediksi pertemuan dua benda. Dalam teknologi, sensor kecepatan dan posisi pada kendaraan atau robot menghasilkan data yang dapat dianalisis menggunakan konsep kinematika.`,
    example:`Sebuah mobil bergerak dengan kecepatan awal 5 m/s dan percepatan tetap 2 m/s² selama 6 s. Tentukan kecepatan akhir dan perpindahannya.`,
    solution:`Gunakan \\(v=v_0+at\\): \\(v=5+(2)(6)=17\\) m/s. Perpindahan dihitung dengan \\(\\Delta x=v_0t+\\frac12at^2\\), sehingga \\(\\Delta x=(5)(6)+\\frac12(2)(6^2)=30+36=66\\) m.`,
    mistakes:`Jangan menyamakan jarak dengan perpindahan atau kelajuan dengan kecepatan. Kesalahan lain adalah menggunakan rumus GLBB pada gerak yang percepatannya tidak konstan, salah memasukkan satuan waktu, dan mengabaikan tanda arah.`,
    summary:[`Kinematika membahas bagaimana benda bergerak, bukan penyebab geraknya.`,`Posisi menunjukkan letak benda terhadap titik acuan.`,`Perpindahan adalah perubahan posisi dan mempunyai arah.`,`Kecepatan adalah laju perubahan posisi, sedangkan percepatan adalah laju perubahan kecepatan.`,`GLB mempunyai kecepatan konstan dan percepatan nol.`,`GLBB menggunakan persamaan gerak dengan percepatan konstan.`,`Kemiringan grafik x-t menyatakan kecepatan dan kemiringan grafik v-t menyatakan percepatan.`,`Luas di bawah grafik v-t menyatakan perpindahan.`]
  },
  dynamics: {
    title:"DINAMIKA", subtitle:"Gaya, massa, dan perubahan gerak",
    history:`Dinamika klasik berkembang sangat kuat melalui karya Isaac Newton. Hukum Newton memberikan hubungan matematis antara gaya dan perubahan gerak. Dari konsep tersebut berkembang analisis gaya pada benda, gesekan, gerak melingkar, bidang miring, sistem katrol, hingga aplikasi teknik. Sampai sekarang hukum Newton menjadi dasar untuk menganalisis banyak sistem mekanik.`,
    definition:`Dinamika mempelajari hubungan antara gaya dan gerak. Gaya merupakan interaksi yang dapat mengubah keadaan gerak benda. Hukum I Newton menjelaskan keadaan benda ketika resultan gaya nol, Hukum II Newton menyatakan \\(\\sum\\vec F=m\\vec a\\), dan Hukum III Newton menjelaskan pasangan gaya aksi-reaksi. Massa menyatakan ukuran kelembaman benda.`,
    characteristics:`Gaya merupakan besaran vektor sehingga besar dan arah harus diperhatikan. Dalam soal dinamika, langkah penting adalah menggambar diagram benda bebas, menentukan semua gaya yang bekerja, memilih sumbu koordinat, kemudian menjumlahkan komponen gaya. Benda dapat berada dalam keadaan setimbang jika resultan gaya nol, walaupun beberapa gaya tetap bekerja pada benda.`,
    types:`Gaya yang sering ditemui adalah gaya berat \\(w=mg\\), gaya normal, gaya gesek, gaya tegangan tali, gaya pegas, dan gaya luar. Gaya gesek dapat berupa gesek statis atau kinetis. Pada bidang miring, gaya berat dapat diuraikan menjadi komponen sejajar dan tegak lurus bidang.`,
    factors:`Percepatan dipengaruhi oleh resultan gaya dan massa. Jika resultan gaya diperbesar sementara massa tetap, percepatan membesar. Jika massa diperbesar sementara resultan gaya tetap, percepatan mengecil. Gesekan dipengaruhi kondisi permukaan dan gaya normal, sehingga permukaan kasar cenderung menghasilkan gaya gesek lebih besar dalam model sederhana.`,
    application:`Dinamika digunakan dalam perancangan sabuk pengaman, lift, kendaraan, rem, jembatan, mesin, alat olahraga, dan robot. Saat mobil direm, misalnya, gaya gesek antara ban dan jalan mengubah momentum kendaraan sehingga kecepatannya berkurang. Analisis gaya membantu menentukan apakah sistem aman dan mampu menghasilkan percepatan yang diinginkan.`,
    example:`Benda bermassa 4 kg mendapat gaya horizontal 20 N ke kanan dan gaya gesek 4 N ke kiri. Tentukan percepatan benda.`,
    solution:`Ambil kanan sebagai arah positif. Resultan gaya \\(F_{net}=20-4=16\\) N. Dari \\(F_{net}=ma\\), diperoleh \\(a=16/4=4\\) m/s² ke kanan.`,
    mistakes:`Kesalahan umum adalah memasukkan gaya aksi-reaksi sebagai dua gaya yang bekerja pada benda yang sama, lupa bahwa gaya merupakan vektor, atau langsung menggunakan \\(F=ma\\) tanpa menghitung resultan gaya. Diagram benda bebas sangat membantu menghindari kesalahan tersebut.`,
    summary:[`Dinamika membahas hubungan gaya dengan perubahan gerak.`,`Gaya adalah besaran vektor sehingga arah harus diperhatikan.`,`Hukum I Newton berkaitan dengan kelembaman dan resultan gaya nol.`,`Hukum II Newton menyatakan \\(\\sum F=ma\\).`,`Hukum III Newton menjelaskan pasangan gaya aksi dan reaksi pada dua benda berbeda.`,`Gaya berat, normal, gesekan, tegangan, dan pegas merupakan gaya yang sering dianalisis.`,`Diagram benda bebas membantu mengidentifikasi semua gaya yang bekerja.`,`Untuk massa tetap, resultan gaya yang lebih besar menghasilkan percepatan yang lebih besar.`]
  },
  energy: {
    title:"USAHA & ENERGI", subtitle:"Perpindahan, perubahan, dan kekekalan energi",
    history:`Gagasan energi berkembang dari kajian gerak, mesin, panas, dan transformasi energi. Penelitian tentang kerja mesin dan hubungan panas dengan kerja membantu ilmuwan memahami bahwa energi dapat berpindah dan berubah bentuk. James Prescott Joule merupakan salah satu tokoh penting dalam perkembangan konsep kesetaraan energi mekanik dan panas. Prinsip kekekalan energi kemudian menjadi salah satu prinsip dasar fisika.`,
    definition:`Usaha adalah proses perpindahan energi akibat gaya yang menyebabkan perpindahan. Untuk gaya konstan, usaha dinyatakan \\(W=Fs\\cos\\theta\\). Energi kinetik adalah energi karena gerak \\(E_k=\\frac12mv^2\\), sedangkan energi potensial gravitasi dekat permukaan bumi adalah \\(E_p=mgh\\). Jumlah energi kinetik dan energi potensial disebut energi mekanik.`,
    characteristics:`Usaha dapat bernilai positif, negatif, atau nol. Usaha positif terjadi ketika komponen gaya searah perpindahan, usaha negatif ketika berlawanan arah, dan usaha nol ketika gaya tegak lurus perpindahan atau tidak ada perpindahan. Energi kinetik bergantung pada kuadrat kecepatan, sehingga perubahan kecepatan memberikan perubahan energi yang cukup besar.`,
    types:`Energi dapat berbentuk kinetik, potensial gravitasi, potensial elastis, kimia, listrik, termal, cahaya, dan nuklir. Dalam pembahasan mekanika, energi mekanik biasanya terdiri dari energi kinetik dan energi potensial. Energi dapat berpindah melalui kerja, kalor, atau mekanisme lain, tetapi dalam sistem tertutup jumlah total energi tetap.`,
    factors:`Usaha dipengaruhi besar gaya, perpindahan, dan sudut antara gaya dengan perpindahan. Energi kinetik dipengaruhi massa dan kuadrat kecepatan. Energi potensial gravitasi dipengaruhi massa, gravitasi, dan ketinggian. Jika terdapat gesekan, sebagian energi mekanik dapat berubah menjadi energi internal atau termal sehingga energi mekanik tidak lagi konstan.`,
    application:`Konsep usaha dan energi digunakan untuk menganalisis roller coaster, pengereman kendaraan, pembangkit listrik, turbin, pegas, alat olahraga, dan kebutuhan energi mesin. Pendekatan energi sering memudahkan analisis karena kita dapat membandingkan keadaan awal dan akhir tanpa harus mengetahui seluruh detail gaya pada setiap titik lintasan.`,
    example:`Sebuah benda bermassa 2 kg berada pada ketinggian 5 m. Dengan \\(g=10\\) m/s², tentukan energi potensialnya. Jika benda jatuh tanpa hambatan, tentukan energi kinetiknya tepat sebelum mencapai tanah.`,
    solution:`Energi potensial awal \\(E_p=mgh=(2)(10)(5)=100\\) J. Jika tidak ada hambatan, energi mekanik kekal. Di tanah \\(E_p\\approx0\\), sehingga energi kinetik menjadi sekitar 100 J. Dari \\(E_k=\\frac12mv^2\\), kecepatan akhirnya sekitar 10 m/s.`,
    mistakes:`Kesalahan umum adalah menganggap semua gaya melakukan usaha, lupa memperhatikan sudut gaya, atau menyamakan energi dengan gaya. Perhatikan juga bahwa energi mekanik hanya kekal jika kondisi sistem mendukungnya; adanya gesekan dapat mengubah energi mekanik menjadi energi termal.`,
    summary:[`Usaha merupakan perpindahan energi akibat gaya dan perpindahan.`,`Usaha gaya konstan dinyatakan \\(W=Fs\\cos\\theta\\).`,`Energi kinetik adalah \\(E_k=\\frac12mv^2\\).`,`Energi potensial gravitasi dekat permukaan bumi adalah \\(E_p=mgh\\).`,`Energi mekanik adalah jumlah energi kinetik dan energi potensial.`,`Pada sistem ideal tanpa kehilangan, energi mekanik dapat tetap.`,`Gesekan dapat mengubah energi mekanik menjadi energi termal.`,`Pendekatan energi berguna untuk membandingkan keadaan awal dan akhir suatu sistem.`]
  },
  momentum: {
    title:"MOMENTUM & IMPULS", subtitle:"Perubahan gerak pada interaksi dan tumbukan",
    history:`Momentum menjadi konsep penting dalam mekanika karena dapat digunakan untuk menganalisis interaksi benda dalam waktu singkat. Kajian tumbukan, gerak proyektil, dan sistem partikel menunjukkan bahwa momentum total dapat tetap pada sistem yang tidak mendapat resultan gaya luar. Impuls kemudian digunakan untuk menghubungkan gaya yang bekerja selama selang waktu tertentu dengan perubahan momentum.`,
    definition:`Momentum linear didefinisikan sebagai \\(\\vec p=m\\vec v\\). Momentum merupakan besaran vektor sehingga arahnya mengikuti arah kecepatan. Impuls adalah perubahan momentum, \\(\\vec J=\\Delta\\vec p\\). Untuk gaya konstan, \\(\\vec J=\\vec F\\Delta t\\). Konsep ini menjelaskan mengapa gaya yang sama dapat memberikan efek berbeda jika bekerja dalam durasi yang berbeda.`,
    characteristics:`Momentum semakin besar jika massa atau kecepatan semakin besar. Jika arah kecepatan berubah, momentum juga berubah arah. Impuls dapat diberikan oleh gaya besar dalam waktu singkat atau gaya lebih kecil dalam waktu lebih lama. Pada sistem terisolasi, jumlah momentum sebelum interaksi sama dengan jumlah momentum sesudah interaksi.`,
    types:`Tumbukan dapat dibedakan menjadi lenting sempurna, tidak lenting sama sekali, dan tumbukan sebagian lenting. Pada tumbukan tidak lenting sama sekali, dua benda dapat menyatu setelah bertumbukan. Pada tumbukan lenting sempurna, momentum dan energi kinetik total idealnya tetap.`,
    factors:`Momentum dipengaruhi massa dan kecepatan. Besar impuls dipengaruhi gaya dan selang waktu gaya bekerja. Airbag, helm, dan bantalan pelindung bekerja dengan prinsip memperpanjang waktu interaksi sehingga untuk perubahan momentum yang sama, gaya rata-rata dapat dibuat lebih kecil.`,
    application:`Momentum digunakan untuk menganalisis tabrakan kendaraan, tumbukan bola, olahraga, roket, sistem propulsi, dan keselamatan kendaraan. Saat menangkap bola, tangan dapat ditarik mengikuti arah gerak bola untuk memperbesar waktu kontak sehingga gaya rata-rata pada tangan berkurang.`,
    example:`Bola 0,5 kg bergerak 8 m/s ke kanan. Setelah dipukul, kecepatannya menjadi 4 m/s ke kiri. Tentukan perubahan momentumnya dan impuls yang diterima bola.`,
    solution:`Ambil kanan positif. Momentum awal \\(p_i=(0,5)(8)=4\\) kg m/s. Karena setelah dipukul bergerak ke kiri, \\(v_f=-4\\) m/s dan \\(p_f=(0,5)(-4)=-2\\) kg m/s. Maka \\(\\Delta p=p_f-p_i=-2-4=-6\\) kg m/s. Impulsnya juga \\(-6\\) N s, yaitu 6 N s ke kiri.`,
    mistakes:`Kesalahan umum adalah mengabaikan tanda arah kecepatan, menganggap impuls sama dengan gaya, atau menggunakan kekekalan momentum pada sistem yang mendapat gaya luar signifikan. Selalu tentukan sistem dan arah positif sebelum menghitung.`,
    summary:[`Momentum adalah hasil kali massa dan kecepatan, \\(p=mv\\).`,`Momentum merupakan besaran vektor sehingga arah harus diperhatikan.`,`Impuls adalah perubahan momentum, \\(J=\\Delta p\\).`,`Untuk gaya konstan, impuls dapat dihitung dengan \\(J=F\\Delta t\\).`,`Sistem terisolasi memiliki momentum total yang tetap.`,`Tumbukan dapat dibedakan berdasarkan perubahan energi kinetiknya.`,`Memperpanjang waktu tumbukan dapat mengurangi gaya rata-rata untuk perubahan momentum yang sama.`,`Konsep momentum banyak digunakan pada tumbukan, olahraga, roket, dan keselamatan kendaraan.`]
  },
  waves: {
    title:"GETARAN & GELOMBANG", subtitle:"Osilasi, periode, frekuensi, dan perambatan energi",
    history:`Kajian getaran dan gelombang berkembang dari pengamatan gerak periodik, bunyi, cahaya, dan getaran mekanik. Getaran sederhana menjadi model penting untuk menjelaskan sistem pegas dan bandul. Dari konsep getaran berkembang pemahaman bahwa gangguan dapat merambat sebagai gelombang, membawa energi dari satu tempat ke tempat lain tanpa harus memindahkan medium secara keseluruhan.`,
    definition:`Getaran adalah gerak bolak-balik secara periodik melalui titik keseimbangan. Besaran pentingnya adalah amplitudo, periode, dan frekuensi. Gelombang adalah getaran yang merambat. Gelombang dapat berupa gelombang mekanik yang membutuhkan medium atau gelombang elektromagnetik yang dapat merambat tanpa medium.`,
    characteristics:`Amplitudo menyatakan simpangan maksimum dari titik keseimbangan. Periode \\(T\\) adalah waktu yang diperlukan untuk satu getaran, sedangkan frekuensi \\(f\\) adalah banyaknya getaran tiap detik. Hubungannya \\(f=1/T\\). Pada gelombang, panjang gelombang \\(\\lambda\\) adalah jarak antara dua titik terdekat yang sefase.`,
    types:`Getaran dapat terjadi pada pegas, bandul, senar, dan berbagai sistem mekanik. Gelombang dibedakan menjadi transversal dan longitudinal berdasarkan arah getaran terhadap arah rambat. Gelombang juga dapat diklasifikasikan sebagai mekanik atau elektromagnetik. Fenomena pentingnya meliputi refleksi, refraksi, difraksi, interferensi, dan resonansi.`,
    factors:`Pada getaran sederhana, periode bergantung pada parameter sistem. Pada pegas, periode dipengaruhi massa dan konstanta pegas, sedangkan pada bandul sederhana periode bergantung pada panjang tali dan gravitasi untuk simpangan kecil. Pada gelombang, cepat rambat berhubungan dengan frekuensi dan panjang gelombang melalui \\(v=f\\lambda\\).`,
    application:`Getaran dan gelombang digunakan pada alat musik, sonar, komunikasi radio, USG, gempa, seismograf, teknologi optik, dan desain bangunan tahan gempa. Resonansi juga digunakan pada berbagai alat, tetapi harus dikendalikan karena amplitudo yang terlalu besar dapat merusak sistem.`,
    example:`Sebuah sumber melakukan 20 getaran dalam 5 sekon. Tentukan frekuensi dan periode getaran. Jika gelombang tersebut mempunyai panjang gelombang 2 m, tentukan cepat rambatnya.`,
    solution:`Frekuensi \\(f=n/t=20/5=4\\) Hz. Periode \\(T=1/f=0,25\\) s. Jika \\(\\lambda=2\\) m, cepat rambat \\(v=f\\lambda=(4)(2)=8\\) m/s.`,
    mistakes:`Kesalahan umum adalah menganggap frekuensi dan periode memiliki nilai yang sama, tertukar antara amplitudo dan panjang gelombang, atau menggunakan \\(v=f\\lambda\\) tanpa memastikan satuan. Ingat bahwa amplitudo berkaitan dengan simpangan, sedangkan panjang gelombang berkaitan dengan jarak pola gelombang.`,
    summary:[`Getaran adalah gerak bolak-balik periodik melalui titik keseimbangan.`,`Amplitudo adalah simpangan maksimum dari posisi keseimbangan.`,`Periode adalah waktu satu getaran dan frekuensi adalah banyak getaran per detik.`,`Hubungan periode dan frekuensi adalah \\(f=1/T\\).`,`Gelombang merupakan getaran yang merambat dan membawa energi.`,`Gelombang transversal bergetar tegak lurus arah rambat, sedangkan longitudinal sejajar arah rambat.`,`Hubungan cepat rambat, frekuensi, dan panjang gelombang adalah \\(v=f\\lambda\\).`,`Fenomena gelombang meliputi refleksi, refraksi, difraksi, interferensi, dan resonansi.`]
  },
  fluids: {
    title:"FLUIDA", subtitle:"Tekanan, gaya apung, dan aliran fluida",
    history:`Kajian fluida berkembang dari kebutuhan memahami air, kapal, pompa, dan aliran udara. Archimedes menjelaskan prinsip gaya apung, Pascal menjelaskan transmisi tekanan pada fluida tertutup, sedangkan Bernoulli menghubungkan tekanan, kecepatan, dan ketinggian pada aliran ideal. Prinsip-prinsip tersebut kini digunakan dalam sistem hidrolik, pipa, penerbangan, kedokteran, dan teknologi industri.`,
    definition:`Fluida adalah zat yang dapat mengalir, meliputi zat cair dan gas. Tekanan didefinisikan sebagai gaya per satuan luas, \\(P=F/A\\). Pada fluida diam, tekanan bertambah dengan kedalaman menurut \\(P=P_0+\\rho gh\\). Massa jenis menyatakan massa tiap satuan volume, \\(\\rho=m/V\\).`,
    characteristics:`Fluida tidak mempertahankan bentuk tetap seperti benda padat. Tekanan pada fluida diam bekerja ke segala arah. Tekanan hidrostatik pada kedalaman tertentu dipengaruhi massa jenis, gravitasi, dan kedalaman, bukan bentuk wadah. Pada fluida bergerak, luas penampang dan kecepatan aliran saling berhubungan melalui persamaan kontinuitas pada kondisi tertentu.`,
    types:`Fluida dapat dikaji sebagai fluida statis dan fluida dinamis. Konsep fluida statis meliputi tekanan hidrostatik, hukum Pascal, dan hukum Archimedes. Fluida dinamis meliputi debit, kontinuitas, dan persamaan Bernoulli untuk model aliran ideal.`,
    factors:`Tekanan hidrostatik dipengaruhi oleh massa jenis \\(\\rho\\), gravitasi \\(g\\), dan kedalaman \\(h\\). Gaya apung dipengaruhi massa jenis fluida dan volume fluida yang dipindahkan. Pada aliran ideal, jika luas penampang mengecil, kecepatan aliran dapat meningkat untuk menjaga kontinuitas.`,
    application:`Fluida digunakan pada dongkrak dan rem hidrolik, kapal, kapal selam, balon udara, sayap pesawat, pipa air, pompa, alat ukur tekanan, dan berbagai alat medis. Prinsip Archimedes membantu menjelaskan mengapa kapal dapat terapung, sedangkan prinsip Pascal memungkinkan gaya kecil pada piston kecil menghasilkan gaya lebih besar pada piston besar.`,
    example:`Air memiliki massa jenis 1000 kg/m³. Berapa tekanan hidrostatik relatif terhadap permukaan pada kedalaman 3 m jika \\(g=10\\) m/s²?`,
    solution:`Gunakan \\(P=\\rho gh\\). Maka \\(P=(1000)(10)(3)=30.000\\) Pa. Nilai tersebut adalah tekanan akibat kolom air. Jika tekanan atmosfer juga diperhitungkan, tekanan absolut adalah \\(P_{atm}+30.000\\) Pa.`,
    mistakes:`Kesalahan umum adalah mencampurkan tekanan relatif dengan tekanan absolut, menggunakan kedalaman yang salah, atau lupa bahwa massa jenis harus dalam satuan SI. Untuk gaya apung, gunakan volume fluida yang dipindahkan, bukan selalu volume seluruh benda.`,
    summary:[`Fluida adalah zat yang dapat mengalir dan terdiri atas cairan serta gas.`,`Tekanan didefinisikan sebagai gaya per luas, \\(P=F/A\\).`,`Tekanan hidrostatik bertambah dengan massa jenis, gravitasi, dan kedalaman.`,`Hukum Pascal menjelaskan penerusan tekanan pada fluida tertutup.`,`Hukum Archimedes menjelaskan gaya apung sebesar berat fluida yang dipindahkan.`,`Persamaan kontinuitas menghubungkan luas penampang dan kecepatan aliran.`,`Pada model aliran ideal, penyempitan penampang dapat meningkatkan kecepatan aliran.`,`Konsep fluida digunakan dalam hidrolik, kapal, pipa, penerbangan, dan alat medis.`]
  }
};

const chapterOrder = ["vector","kinematics","dynamics","energy","momentum","waves","fluids"];
const chapterMeta = {
  vector:["01","VEKTOR","arah & besar"], kinematics:["02","KINEMATIKA","gerak"], dynamics:["03","DINAMIKA","gaya"], energy:["04","USAHA & ENERGI","energi"],
  momentum:["05","MOMENTUM & IMPULS","tumbukan"], waves:["06","GETARAN & GELOMBANG","osilasi"], fluids:["07","FLUIDA","tekanan & aliran"]
};

function renderChapters(){
  const list=document.getElementById("chapterList");
  list.innerHTML=chapterOrder.map((id,i)=>{const m=chapterMeta[id];return `<button class="chapter-btn ${i===0?"active":""}" data-chapter="${id}"><span class="num">${m[0]}</span><span><b>${m[1]}</b><small>${m[2]}</small></span></button>`}).join("");
  list.querySelectorAll(".chapter-btn").forEach(b=>b.onclick=()=>selectChapter(b.dataset.chapter));
}
function diagramFor(id){
  if(id==="vector") return `<div class="diagram"><svg viewBox="0 0 700 280"><defs><marker id="mv" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto"><path d="M0,0L0,8L9,4z" fill="#4669d7"/></marker></defs><line x1="90" y1="220" x2="620" y2="220" stroke="#b9c4d9" stroke-width="2"/><line x1="90" y1="240" x2="90" y2="35" stroke="#b9c4d9" stroke-width="2"/><line x1="90" y1="220" x2="500" y2="80" stroke="#4669d7" stroke-width="7" marker-end="url(#mv)"/><line x1="500" y1="220" x2="500" y2="80" stroke="#9caee5" stroke-dasharray="8 7" stroke-width="3"/><line x1="90" y1="220" x2="500" y2="220" stroke="#9caee5" stroke-dasharray="8 7" stroke-width="3"/><text x="510" y="75" fill="#152f69" font-weight="700">A</text><text x="300" y="245" fill="#6d7f9f">Aₓ</text><text x="510" y="160" fill="#6d7f9f">Aᵧ</text></svg></div>`;
  if(id==="kinematics") return `<div class="diagram"><svg viewBox="0 0 700 280"><polyline points="80,230 180,190 280,150 380,110 480,70 590,35" fill="none" stroke="#4669d7" stroke-width="7"/><line x1="70" y1="235" x2="620" y2="235" stroke="#c4cedf" stroke-width="2"/><line x1="80" y1="250" x2="80" y2="25" stroke="#c4cedf" stroke-width="2"/><text x="570" y="260" fill="#6d7f9f">waktu</text><text x="25" y="35" fill="#6d7f9f">posisi</text></svg></div>`;
  if(id==="dynamics") return `<div class="diagram"><svg viewBox="0 0 700 280"><rect x="250" y="120" width="160" height="90" rx="14" fill="#eef2ff" stroke="#4669d7" stroke-width="4"/><line x1="250" y1="165" x2="100" y2="165" stroke="#4669d7" stroke-width="7"/><polygon points="100,165 125,150 125,180" fill="#4669d7"/><line x1="410" y1="165" x2="590" y2="165" stroke="#4669d7" stroke-width="7"/><polygon points="590,165 565,150 565,180" fill="#4669d7"/><text x="290" y="175" fill="#152f69" font-weight="700">m</text><text x="95" y="145" fill="#6d7f9f">F₁</text><text x="555" y="145" fill="#6d7f9f">F₂</text></svg></div>`;
  if(id==="energy") return `<div class="diagram"><svg viewBox="0 0 700 280"><line x1="100" y1="235" x2="600" y2="235" stroke="#c4cedf" stroke-width="3"/><line x1="180" y1="235" x2="180" y2="70" stroke="#c4cedf" stroke-width="3"/><circle cx="180" cy="70" r="28" fill="#4669d7"/><path d="M230 70 C330 90 390 150 480 235" fill="none" stroke="#4669d7" stroke-width="6"/><circle cx="480" cy="235" r="28" fill="#5c76e7"/><text x="150" y="35" fill="#152f69">Eₚ tinggi</text><text x="450" y="275" fill="#152f69">Eₖ besar</text></svg></div>`;
  if(id==="momentum") return `<div class="diagram"><svg viewBox="0 0 700 280"><circle cx="200" cy="145" r="50" fill="#eef2ff" stroke="#4669d7" stroke-width="5"/><circle cx="500" cy="145" r="50" fill="#f2efff" stroke="#6b63c7" stroke-width="5"/><line x1="250" y1="145" x2="430" y2="145" stroke="#4669d7" stroke-width="6"/><polygon points="430,145 405,130 405,160" fill="#4669d7"/><text x="175" y="151" fill="#152f69" font-weight="700">p₁</text><text x="475" y="151" fill="#152f69" font-weight="700">p₂</text></svg></div>`;
  if(id==="waves") return `<div class="diagram"><svg viewBox="0 0 700 280"><path d="M50 145 C90 45 130 45 170 145 S250 245 290 145 S370 45 410 145 S490 245 530 145 S610 45 650 145" fill="none" stroke="#4669d7" stroke-width="7"/><line x1="170" y1="145" x2="290" y2="145" stroke="#9caee5" stroke-dasharray="7 7" stroke-width="3"/><text x="215" y="135" fill="#152f69">λ</text></svg></div>`;
  return `<div class="diagram"><svg viewBox="0 0 700 280"><path d="M70 80 Q350 35 630 80" fill="none" stroke="#4669d7" stroke-width="7"/><path d="M70 120 Q350 75 630 120" fill="none" stroke="#6e83dd" stroke-width="7"/><path d="M70 160 Q350 115 630 160" fill="none" stroke="#92a4e9" stroke-width="7"/><rect x="300" y="160" width="100" height="70" rx="12" fill="#eef2ff" stroke="#4669d7" stroke-width="4"/><text x="324" y="202" fill="#152f69" font-weight="700">h</text></svg></div>`;
}
function renderMaterial(id){
  const c=chapters[id]; const i=chapterOrder.indexOf(id)+1;
  document.getElementById("materialContent").innerHTML=`
    <div class="material-cover"><span class="chapter-no">BAB ${String(i).padStart(2,"0")}</span><h1>${c.title}</h1><p>${c.subtitle}</p></div>
    <section class="material-section"><h2>1. Sejarah dan Latar Belakang</h2><p>${c.history}</p></section>
    <section class="material-section"><h2>2. Pengertian dan Konsep Dasar</h2><p>${c.definition}</p>${diagramFor(id)}</section>
    <section class="material-section"><h2>3. Karakteristik dan Besaran Penting</h2><p>${c.characteristics}</p></section>
    <section class="material-section two-col"><div class="info-box"><h3>4. Jenis-Jenis / Bentuk</h3><p>${c.types}</p></div><div class="info-box"><h3>5. Faktor yang Mempengaruhi</h3><p>${c.factors}</p></div></section>
    <section class="material-section"><h2>6. Persamaan Penting</h2>${equations[id]}</section>
    <section class="material-section"><h2>7. Penerapan dalam Kehidupan</h2><div class="application"><p>${c.application}</p></div></section>
    <section class="material-section"><h2>8. Contoh Soal dan Pembahasan</h2><div class="example-problem"><p><strong>Soal:</strong> ${c.example}</p><div class="answer"><strong>Pembahasan:</strong><p>${c.solution}</p></div></div></section>
    <section class="material-section"><h2>9. Kesalahan yang Sering Terjadi</h2><div class="info-box warning-box"><p>${c.mistakes}</p></div></section>
    <section class="material-section"><h2>10. Rangkuman Bab</h2><div class="summary-box"><ul>${c.summary.map(x=>`<li>${x}</li>`).join("")}</ul></div></section>`;
  document.getElementById("chapterCounter").textContent=`${i} / ${chapterOrder.length}`;
  if(window.MathJax && typeof MathJax.typesetPromise === "function") MathJax.typesetPromise();
}
const equations={
 vector:`<div class="equation">\\[\\vec A=A_x\\hat i+A_y\\hat j\\]</div><div class="equation">\\[|\\vec A|=\\sqrt{A_x^2+A_y^2}\\]</div><div class="equation">\\[\\theta=\\tan^{-1}\\left(\\frac{A_y}{A_x}\\right)\\]</div><p>Untuk penjumlahan dua vektor, jumlahkan komponen yang searah: \\(R_x=A_x+B_x\\) dan \\(R_y=A_y+B_y\\). Besar resultan kemudian diperoleh dari kedua komponen tersebut.</p>`,
 kinematics:`<div class="equation">\\[v=v_0+at\\]</div><div class="equation">\\[\\Delta x=v_0t+\\frac12at^2\\]</div><div class="equation">\\[v^2=v_0^2+2a\\Delta x\\]</div><p>Untuk GLB, \\(x=x_0+vt\\). Pada jatuh bebas, percepatan gravitasi digunakan sesuai arah sumbu yang dipilih.</p>`,
 dynamics:`<div class="equation">\\[\\sum\\vec F=m\\vec a\\]</div><div class="equation">\\[w=mg\\]</div><div class="equation">\\[f_k=\\mu_kN\\]</div><p>Untuk gaya gesek statis, besar gaya menyesuaikan kebutuhan sampai nilai maksimum \\(f_s\\leq\\mu_sN\\). Pada bidang miring, komponen berat dapat diuraikan menggunakan sinus dan cosinus.</p>`,
 energy:`<div class="equation">\\[W=Fs\\cos\\theta\\]</div><div class="equation">\\[E_k=\\frac12mv^2\\]</div><div class="equation">\\[E_p=mgh\\]</div><div class="equation">\\[E_{mek}=E_k+E_p\\]</div><p>Jika hanya gaya konservatif bekerja, energi mekanik dapat dipertahankan. Secara umum, teorema usaha-energi menyatakan usaha total sama dengan perubahan energi kinetik.</p>`,
 momentum:`<div class="equation">\\[\\vec p=m\\vec v\\]</div><div class="equation">\\[\\vec J=\\Delta\\vec p=\\vec F\\Delta t\\]</div><div class="equation">\\[\\sum p_{awal}=\\sum p_{akhir}\\]</div><p>Pada tumbukan, pilih sistem dengan jelas. Kekekalan momentum berlaku ketika resultan impuls eksternal pada sistem dapat diabaikan.</p>`,
 waves:`<div class="equation">\\[f=\\frac1T\\]</div><div class="equation">\\[v=f\\lambda\\]</div><div class="equation">\\[\\omega=2\\pi f\\]</div><div class="equation">\\[y=A\\sin(\\omega t+\\phi)\\]</div><p>Untuk getaran pegas sederhana, periode dapat ditulis \\(T=2\\pi\\sqrt{m/k}\\). Untuk bandul sederhana dengan simpangan kecil, \\(T=2\\pi\\sqrt{L/g}\\).</p>`,
 fluids:`<div class="equation">\\[P=\\frac FA\\]</div><div class="equation">\\[P=P_0+\\rho gh\\]</div><div class="equation">\\[F_A=\\rho_f gV_{terdesak}\\]</div><div class="equation">\\[A_1v_1=A_2v_2\\]</div><p>Untuk aliran ideal, persamaan Bernoulli dapat ditulis \\(P+\\frac12\\rho v^2+\\rho gh=konstan\\). Persamaan ini menghubungkan tekanan, kecepatan, dan ketinggian.</p>`
};

function selectChapter(id){
  document.querySelectorAll(".chapter-btn").forEach(b=>b.classList.toggle("active",b.dataset.chapter===id));
  renderMaterial(id); window.currentChapter=id;
}
document.getElementById("prevChapter").onclick=()=>selectChapter(chapterOrder[Math.max(0,chapterOrder.indexOf(window.currentChapter)-1)]);
document.getElementById("nextChapter").onclick=()=>selectChapter(chapterOrder[Math.min(chapterOrder.length-1,chapterOrder.indexOf(window.currentChapter)+1)]);
window.currentChapter="vector"; renderChapters(); renderMaterial("vector");

// PAGE NAVIGATION
const pages={home:"page-home",guide:"page-guide",materials:"page-materials",simulation:"page-simulation",videos:"page-videos",practice:"page-practice",mentoring:"page-mentoring"};
function showPage(name){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(pages[name]).classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.page===name));
  document.querySelector(".main-nav").classList.remove("open");
}
document.querySelectorAll("[data-page]").forEach(el=>el.addEventListener("click",e=>{const p=el.dataset.page;if(p){e.preventDefault();showPage(p)}}));
document.getElementById("mobileMenu").onclick=()=>document.querySelector(".main-nav").classList.toggle("open");

// SIMULATIONS
const simState={id:"vector",playing:false,t:0};
const simMeta={
 vector:["01","Vektor","Resultan dua vektor"],
 kinematics:["02","Kinematika","Gerak lurus berubah beraturan"],
 dynamics:["03","Dinamika","Resultan gaya dan percepatan"],
 work:["04A","Usaha","Kerja oleh gaya"],
 energy:["04B","Energi","Perubahan energi mekanik"],
 momentum:["05A","Momentum","Momentum dua benda"],
 impulse:["05B","Impuls","Gaya dan perubahan momentum"],
 vibration:["06A","Getaran","Gerak periodik"],
 waves:["06B","Gelombang","Gelombang sinus bergerak"],
 fluids:["07","Fluida","Tekanan hidrostatik"]
};
const simOrder=Object.keys(simMeta);
const simDefs={
 vector:{title:"Vektor — Resultan",sub:"Ubah komponen A dan B",controls:[["ax",-8,8,1,3],["ay",-8,8,1,4],["bx",-8,8,1,2],["by",-8,8,1,1]]},
 kinematics:{title:"Kinematika — GLBB",sub:"Posisi dan kecepatan benda",controls:[["v0",0,20,.5,5],["a",-5,5,.1,2],["t",0,10,.1,3]]},
 dynamics:{title:"Dinamika — Hukum II Newton",sub:"Resultan gaya dan percepatan",controls:[["m",1,20,.5,5],["F",0,50,1,20],["fric",0,20,.5,4]]},
 work:{title:"Usaha — Gaya dan perpindahan",sub:"Lihat bagaimana gaya memindahkan energi",controls:[["F",0,50,1,20],["s",0,10,.1,5],["theta",0,180,5,0]]},
 energy:{title:"Energi — Kinetik dan Potensial",sub:"Bandingkan energi pada keadaan berbeda",controls:[["m",1,10,.5,2],["h",0,10,.1,6],["v",0,20,.5,4]]},
 momentum:{title:"Momentum — Dua benda",sub:"Bandingkan momentum dua benda",controls:[["m1",1,10,.5,2],["v1",-10,10,.5,5],["m2",1,10,.5,3],["v2",-10,10,.5,-2]]},
 impulse:{title:"Impuls — Gaya dan waktu",sub:"Lihat pengaruh durasi tumbukan",controls:[["F",0,60,1,20],["dt",.05,2,.05,.5],["m",1,10,.5,2]]},
 vibration:{title:"Getaran — Osilasi",sub:"Amplitudo dan frekuensi gerak periodik",controls:[["A",20,90,1,55],["f",.2,3,.1,1]]},
 waves:{title:"Gelombang — Perambatan",sub:"Hubungan amplitudo, frekuensi, dan panjang gelombang",controls:[["A",10,80,1,45],["f",.2,3,.1,1],["lambda",40,180,5,100]]},
 fluids:{title:"Fluida — Tekanan hidrostatik",sub:"Pengaruh massa jenis dan kedalaman",controls:[["rho",700,1400,10,1000],["h",0,10,.1,4],["g",9,10,.1,10]]}
};
function renderSimTabs(){
 document.getElementById("simChapterList").innerHTML=simOrder.map((id,i)=>{const m=simMeta[id];return `<button class="sim-tab ${i===0?"active":""}" data-sim="${id}"><span>${m[0]}</span><b>${m[1]}</b><small>${m[2]}</small></button>`}).join("");
 document.querySelectorAll(".sim-tab").forEach(b=>b.onclick=()=>selectSimulation(b.dataset.sim));
}
function selectSimulation(id){
 simState.id=id; simState.t=0;
 document.querySelectorAll(".sim-tab").forEach(b=>b.classList.toggle("active",b.dataset.sim===id));
 const d=simDefs[id]; document.getElementById("simTitle").textContent=d.title; document.getElementById("simSubtitle").textContent=d.sub;
 document.getElementById("simControls").innerHTML=d.controls.map(c=>`<div class="control"><label><span>${labelFor(c[0])}</span><output id="out-${c[0]}">${c[4]}</output></label><input data-key="${c[0]}" type="range" min="${c[1]}" max="${c[2]}" step="${c[3]}" value="${c[4]}"></div>`).join("");
 document.querySelectorAll("#simControls input").forEach(x=>x.oninput=()=>{document.getElementById("out-"+x.dataset.key).textContent=x.value;drawSimulation()});
 drawSimulation();
}
function labelFor(k){return ({ax:"Aₓ",ay:"Aᵧ",bx:"Bₓ",by:"Bᵧ",v0:"v₀ (m/s)",a:"a (m/s²)",t:"waktu (s)",m:"massa (kg)",F:"gaya (N)",fric:"gesekan (N)",s:"perpindahan (m)",theta:"sudut (°)",h:"tinggi (m)",v:"kecepatan (m/s)",m1:"massa 1 (kg)",v1:"kecepatan 1",m2:"massa 2 (kg)",v2:"kecepatan 2",dt:"waktu tumbukan (s)",A:"amplitudo",f:"frekuensi (Hz)",lambda:"panjang gelombang (m)",rho:"massa jenis (kg/m³)",g:"gravitasi (m/s²)"})[k]||k}
function getSimVals(){const o={};document.querySelectorAll("#simControls input").forEach(x=>o[x.dataset.key]=+x.value);return o}
function simExplain(cause,effect,reason){return `<div class="cause-effect"><div><span>SEBAB</span><p>${cause}</p></div><div><span>PERUBAHAN</span><p>${effect}</p></div><div><span>AKIBAT FISIKA</span><p>${reason}</p></div></div>`}
function drawSimulation(){
 const id=simState.id,v=getSimVals(); let svg="", read="", explain="";
 if(id==="vector"){
   const rx=v.ax+v.bx,ry=v.ay+v.by,R=Math.hypot(rx,ry),ang=Math.atan2(ry,rx)*180/Math.PI;
   const s=24,cx=390,cy=210,ex=cx+rx*s,ey=cy-ry*s;
   svg=`<svg viewBox="0 0 780 420"><defs><marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0L0,6L6,3z" fill="#4669d7"/></marker><marker id="arr2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0L0,6L6,3z" fill="#7c6fcd"/></marker></defs><line x1="80" y1="210" x2="700" y2="210" stroke="#bdc8dc"/><line x1="390" y1="360" x2="390" y2="50" stroke="#bdc8dc"/><line x1="${cx}" y1="${cy}" x2="${cx+v.ax*s}" y2="${cy-v.ay*s}" stroke="#4669d7" stroke-width="7" marker-end="url(#arr)"/><line x1="${cx}" y1="${cy}" x2="${cx+v.bx*s}" y2="${cy-v.by*s}" stroke="#7c6fcd" stroke-width="7" marker-end="url(#arr2)"/><line x1="${cx}" y1="${cy}" x2="${ex}" y2="${ey}" stroke="#152f69" stroke-width="8" marker-end="url(#arr)"/><text x="105" y="45" fill="#152f69" font-size="20" font-weight="700">Resultan R = A + B</text></svg>`;
   read=`<div class="readout"><small>Rₓ</small><b>${rx.toFixed(1)}</b></div><div class="readout"><small>Rᵧ</small><b>${ry.toFixed(1)}</b></div><div class="readout"><small>|R|</small><b>${R.toFixed(2)}</b></div><div class="readout"><small>arah</small><b>${ang.toFixed(1)}°</b></div>`;
   explain=simExplain(`Komponen Aₓ, Aᵧ, Bₓ, dan Bᵧ diubah melalui slider.`,`Panjang dan arah A, B, serta resultan berubah mengikuti nilai komponennya.`,`Karena vektor memiliki arah, komponen yang berlawanan dapat saling mengurangi. Resultan ditentukan oleh jumlah komponen x dan jumlah komponen y.`);
 } else if(id==="kinematics"){
   const tt=v.t,x=v.v0*tt+.5*v.a*tt*tt,vel=v.v0+v.a*tt,pos=Math.max(70,Math.min(690,90+x*12));
   svg=`<svg viewBox="0 0 780 420"><line x1="80" y1="300" x2="700" y2="300" stroke="#b8c4da" stroke-width="4"/><line x1="100" y1="300" x2="${pos}" y2="300" stroke="#4669d7" stroke-width="8"/><circle cx="${pos}" cy="300" r="24" fill="#4669d7"><animate attributeName="cy" values="300;292;300" dur="1s" repeatCount="indefinite"/></circle><text x="95" y="100" fill="#152f69" font-size="22" font-weight="700">x = ${x.toFixed(1)} m</text><text x="95" y="135" fill="#6d7f9f">Gerak berubah saat a diubah</text></svg>`;
   read=`<div class="readout"><small>posisi</small><b>${x.toFixed(2)} m</b></div><div class="readout"><small>kecepatan</small><b>${vel.toFixed(2)} m/s</b></div><div class="readout"><small>percepatan</small><b>${v.a.toFixed(2)} m/s²</b></div><div class="readout"><small>waktu</small><b>${tt.toFixed(1)} s</b></div>`;
   explain=simExplain(`Kecepatan awal, percepatan, atau waktu diubah.`,`Posisi dan kecepatan akhir ikut berubah sesuai persamaan GLBB.`,`Percepatan adalah perubahan kecepatan tiap satuan waktu. Semakin besar percepatan pada waktu yang sama, semakin besar perubahan kecepatan dan perpindahan.`);
 } else if(id==="dynamics"){
   const net=v.F-v.fric,a=net/v.m;
   svg=`<svg viewBox="0 0 780 420"><rect x="320" y="190" width="130" height="80" rx="14" fill="#eef2ff" stroke="#4669d7" stroke-width="5"/><line x1="320" y1="230" x2="${320-Math.min(170,v.fric*5)}" y2="230" stroke="#7c6fcd" stroke-width="8"/><line x1="450" y1="230" x2="${450+Math.min(210,v.F*5)}" y2="230" stroke="#4669d7" stroke-width="8"/><text x="330" y="235" fill="#152f69" font-size="20" font-weight="700">m</text><text x="90" y="100" fill="#152f69" font-size="22" font-weight="700">ΣF = ${net.toFixed(1)} N</text></svg>`;
   read=`<div class="readout"><small>resultan</small><b>${net.toFixed(1)} N</b></div><div class="readout"><small>percepatan</small><b>${a.toFixed(2)} m/s²</b></div><div class="readout"><small>massa</small><b>${v.m.toFixed(1)} kg</b></div><div class="readout"><small>gaya dorong</small><b>${v.F.toFixed(1)} N</b></div>`;
   explain=simExplain(`Gaya dorong dan gaya gesek diubah, atau massa benda diperbesar/diperkecil.`,`Resultan gaya dan percepatan benda berubah.`,`Menurut Hukum II Newton, percepatan sebanding dengan resultan gaya dan berbanding terbalik dengan massa: \\(a=\\sum F/m\\).`);
 } else if(id==="work"){
   const theta=v.theta*Math.PI/180,W=v.F*v.s*Math.cos(theta),rad=theta;
   const end=120+v.s*48;
   svg=`<svg viewBox="0 0 780 420"><line x1="80" y1="300" x2="700" y2="300" stroke="#b8c4da" stroke-width="4"/><rect x="110" y="250" width="70" height="50" rx="10" fill="#eef2ff" stroke="#4669d7" stroke-width="4"/><line x1="145" y1="275" x2="${Math.min(650,end)}" y2="${275-Math.sin(rad)*Math.min(170,v.F*3)}" stroke="#4669d7" stroke-width="7" marker-end="url(#workArrow)"/><line x1="145" y1="275" x2="${Math.min(650,end)}" y2="275" stroke="#9caee5" stroke-dasharray="7 7"/><text x="90" y="90" fill="#152f69" font-size="22" font-weight="700">W = ${W.toFixed(1)} J</text><defs><marker id="workArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0L0,6L6,3z" fill="#4669d7"/></marker></defs></svg>`;
   read=`<div class="readout"><small>usaha</small><b>${W.toFixed(1)} J</b></div><div class="readout"><small>gaya</small><b>${v.F.toFixed(1)} N</b></div><div class="readout"><small>perpindahan</small><b>${v.s.toFixed(1)} m</b></div><div class="readout"><small>sudut</small><b>${v.theta.toFixed(0)}°</b></div>`;
   explain=simExplain(`Besar gaya, perpindahan, atau sudut antara gaya dan perpindahan diubah.`,`Nilai usaha dapat bertambah, berkurang, menjadi nol, atau bernilai negatif.`,`Komponen gaya yang searah perpindahan melakukan usaha positif. Jika gaya tegak lurus, usaha nol; jika berlawanan arah, usaha negatif.`);
 } else if(id==="energy"){
   const ep=v.m*10*v.h,ek=.5*v.m*v.v*v.v,total=ep+ek,y=320-v.h*25;
   svg=`<svg viewBox="0 0 780 420"><line x1="90" y1="350" x2="690" y2="350" stroke="#b8c4da" stroke-width="4"/><line x1="150" y1="${y}" x2="150" y2="350" stroke="#9caee5" stroke-dasharray="7 7"/><circle cx="150" cy="${y}" r="25" fill="#4669d7"><animate attributeName="cx" values="150;620;150" dur="3s" repeatCount="indefinite"/></circle><text x="100" y="70" fill="#152f69" font-size="22" font-weight="700">E mekanik = ${total.toFixed(1)} J</text></svg>`;
   read=`<div class="readout"><small>E potensial</small><b>${ep.toFixed(1)} J</b></div><div class="readout"><small>E kinetik</small><b>${ek.toFixed(1)} J</b></div><div class="readout"><small>E mekanik</small><b>${total.toFixed(1)} J</b></div><div class="readout"><small>tinggi</small><b>${v.h.toFixed(1)} m</b></div>`;
   explain=simExplain(`Ketinggian dan kecepatan benda diubah.`,`Energi potensial dan energi kinetik berubah sesuai variabel, sedangkan pada model ideal keduanya dijumlahkan menjadi energi mekanik.`,`Ketinggian lebih besar meningkatkan energi potensial, sedangkan kecepatan lebih besar meningkatkan energi kinetik karena bergantung pada kuadrat kecepatan.`);
 } else if(id==="momentum"){
   const p1=v.m1*v.v1,p2=v.m2*v.v2,pt=p1+p2;
   svg=`<svg viewBox="0 0 780 420"><circle cx="220" cy="220" r="45" fill="#eef2ff" stroke="#4669d7" stroke-width="5"><animate attributeName="cx" values="220;350;220" dur="2.5s" repeatCount="indefinite"/></circle><circle cx="560" cy="220" r="55" fill="#f1efff" stroke="#7c6fcd" stroke-width="5"><animate attributeName="cx" values="560;430;560" dur="2.5s" repeatCount="indefinite"/></circle><text x="100" y="75" fill="#152f69" font-size="22" font-weight="700">p total = ${pt.toFixed(2)} kg·m/s</text></svg>`;
   read=`<div class="readout"><small>p₁</small><b>${p1.toFixed(1)}</b></div><div class="readout"><small>p₂</small><b>${p2.toFixed(1)}</b></div><div class="readout"><small>p total</small><b>${pt.toFixed(1)}</b></div><div class="readout"><small>massa total</small><b>${(v.m1+v.m2).toFixed(1)}</b></div>`;
   explain=simExplain(`Massa dan kecepatan kedua benda diubah.`,`Momentum masing-masing benda dan momentum total berubah, termasuk tandanya jika arah kecepatan dibalik.`,`Momentum merupakan hasil kali massa dan kecepatan. Karena kecepatan memiliki arah, dua momentum yang berlawanan dapat saling mengurangi.`);
 } else if(id==="impulse"){
   const J=v.F*v.dt,dv=J/v.m;
   svg=`<svg viewBox="0 0 780 420"><line x1="100" y1="290" x2="680" y2="290" stroke="#b8c4da" stroke-width="4"/><rect x="180" y="240" width="90" height="50" rx="12" fill="#eef2ff" stroke="#4669d7" stroke-width="4"><animate attributeName="x" values="180;500;180" dur="2.8s" repeatCount="indefinite"/></rect><line x1="250" y1="215" x2="${250+Math.min(280,v.F*4)}" y2="215" stroke="#4669d7" stroke-width="7"/><text x="95" y="90" fill="#152f69" font-size="22" font-weight="700">J = FΔt = ${J.toFixed(2)} N·s</text></svg>`;
   read=`<div class="readout"><small>impuls</small><b>${J.toFixed(2)} N·s</b></div><div class="readout"><small>gaya</small><b>${v.F.toFixed(1)} N</b></div><div class="readout"><small>durasi</small><b>${v.dt.toFixed(2)} s</b></div><div class="readout"><small>perubahan v (model)</small><b>${dv.toFixed(2)} m/s</b></div>`;
   explain=simExplain(`Gaya atau lama waktu tumbukan diubah.`,`Impuls berubah karena merupakan hasil kali gaya dan selang waktu.`,`Untuk perubahan momentum yang sama, memperpanjang waktu tumbukan dapat menurunkan gaya rata-rata. Inilah salah satu prinsip kerja airbag dan bantalan keselamatan.`);
 } else if(id==="vibration"){
   const A=v.A,f=v.f,phase=simState.t*2*Math.PI*f,x=390+A*Math.sin(phase),T=1/f;
   svg=`<svg viewBox="0 0 780 420"><line x1="120" y1="220" x2="660" y2="220" stroke="#b8c4da" stroke-width="4"/><line x1="390" y1="100" x2="390" y2="340" stroke="#9caee5" stroke-dasharray="7 7"/><circle cx="${x}" cy="220" r="24" fill="#4669d7"/><text x="90" y="70" fill="#152f69" font-size="22" font-weight="700">T = ${T.toFixed(2)} s</text><text x="90" y="105" fill="#6d7f9f">Benda berosilasi di sekitar titik keseimbangan</text></svg>`;
   read=`<div class="readout"><small>amplitudo</small><b>${A}</b></div><div class="readout"><small>frekuensi</small><b>${f.toFixed(1)} Hz</b></div><div class="readout"><small>periode</small><b>${T.toFixed(2)} s</b></div><div class="readout"><small>fase waktu</small><b>${(simState.t).toFixed(2)} s</b></div>`;
   explain=simExplain(`Amplitudo atau frekuensi getaran diubah.`,`Jarak maksimum dari titik keseimbangan dan kecepatan osilasi berubah. Periode ikut berubah ketika frekuensi berubah.`,`Frekuensi menyatakan banyak getaran tiap detik, sedangkan periode adalah waktu satu getaran. Hubungannya adalah \\(T=1/f\\).`);
 } else if(id==="waves"){
   const A=v.A,f=v.f,lam=v.lambda,phase=simState.t*3; let path=""; for(let x=40;x<=740;x+=5){const y=210-A*Math.sin((x/lam)*Math.PI*2-phase);path+=(x===40?"M":"L")+`${x} ${y} `;}
   svg=`<svg viewBox="0 0 780 420"><line x1="35" y1="210" x2="750" y2="210" stroke="#b8c4da"/><path d="${path}" fill="none" stroke="#4669d7" stroke-width="6"/><text x="55" y="70" fill="#152f69" font-size="22" font-weight="700">Gelombang bergerak</text></svg>`;
   read=`<div class="readout"><small>amplitudo</small><b>${A}</b></div><div class="readout"><small>frekuensi</small><b>${f.toFixed(1)} Hz</b></div><div class="readout"><small>panjang λ</small><b>${lam} m</b></div><div class="readout"><small>cepat rambat</small><b>${(f*lam).toFixed(1)} m/s</b></div>`;
   explain=simExplain(`Amplitudo, frekuensi, atau panjang gelombang diubah.`,`Bentuk gelombang dan cepat rambat model berubah.`,`Hubungan dasarnya adalah \\(v=f\\lambda\\). Jika cepat rambat tetap dan frekuensi naik, panjang gelombang akan cenderung mengecil.`);
 } else {
   const P=v.rho*v.g*v.h,waterH=Math.min(270,v.h*25);
   svg=`<svg viewBox="0 0 780 420"><path d="M80 150 Q190 130 300 150 T520 150 T700 150 V360 H80Z" fill="#b9cfff" opacity=".5"/><path d="M80 150 Q190 130 300 150 T520 150 T700 150" fill="none" stroke="#4669d7" stroke-width="6"/><rect x="335" y="${150+waterH/3}" width="100" height="70" rx="15" fill="#eef2ff" stroke="#4669d7" stroke-width="5"/><line x1="500" y1="150" x2="500" y2="${150+waterH}" stroke="#7c6fcd" stroke-width="5"/><text x="515" y="${180+waterH}" fill="#152f69">h = ${v.h.toFixed(1)} m</text><text x="90" y="80" fill="#152f69" font-size="22" font-weight="700">P hidrostatik = ${P.toFixed(0)} Pa</text></svg>`;
   read=`<div class="readout"><small>tekanan</small><b>${P.toFixed(0)} Pa</b></div><div class="readout"><small>ρ</small><b>${v.rho} kg/m³</b></div><div class="readout"><small>kedalaman</small><b>${v.h.toFixed(1)} m</b></div><div class="readout"><small>g</small><b>${v.g.toFixed(1)} m/s²</b></div>`;
   explain=simExplain(`Massa jenis, kedalaman, atau gravitasi diubah.`,`Tekanan hidrostatik yang ditunjukkan alat ukur berubah secara langsung.`,`Tekanan relatif mengikuti \\(P=\\rho gh\\), sehingga penambahan massa jenis, gravitasi, atau kedalaman memperbesar tekanan.`);
 }
 document.getElementById("simCanvas").innerHTML=svg; document.getElementById("simReadouts").innerHTML=read; document.getElementById("simExplain").innerHTML=explain;
 if(window.MathJax && typeof MathJax.typesetPromise === "function") MathJax.typesetPromise();
}
function simLoop(){if(simState.playing){simState.t+=.03;if(["waves","vibration"].includes(simState.id))drawSimulation()}requestAnimationFrame(simLoop)} simLoop();
document.getElementById("simPlay").onclick=()=>{simState.playing=!simState.playing;document.getElementById("simPlay").textContent=simState.playing?"❚❚ Jeda":"▶ Mulai"};
renderSimTabs(); selectSimulation("vector");

// VIDEOS
const videos=[
 ["01","Apa Itu Vektor?","Konsep dasar besar dan arah.","EoeePVoAdEo"],
 ["02","Skalar vs Vektor","Membedakan besaran skalar dan vektor.","CP3qqr6vv4Y"],
 ["03","Jenis-Jenis Vektor","Mengenal vektor nol, basis, posisi, sejajar, dan lainnya.","hg76JCpWIzo"],
 ["04","Menggambar Vektor","Representasi vektor menggunakan anak panah dan sumbu.","PFybiuSowzY"],
 ["05","Komponen Vektor","Menguraikan vektor menjadi komponen x dan y.","MZILIm6y4cY"],
 ["06","Penjumlahan Vektor","Resultan dengan metode analitis dan grafis.","pjZMTGH3lV4"],
 ["07","Pengurangan Vektor","Memahami pengurangan sebagai penjumlahan dengan lawan vektor.","AXxvg28E3h4"],
 ["08","Besar dan Arah Vektor","Menghitung magnitude dan sudut resultan.","pjZMTGH3lV4"],
 ["09","Aplikasi Vektor dalam Kehidupan","Vektor pada perpindahan, gaya, dan navigasi.","X9IDAHqijyc"],
 ["10","Pembahasan Soal Vektor","Latihan soal dan langkah penyelesaian.","pjZMTGH3lV4"]
];
document.getElementById("videoGrid").innerHTML=videos.map(v=>{
 const url=v[3]?`https://www.youtube.com/watch?v=${v[3]}`:`https://www.youtube.com/results?search_query=${encodeURIComponent(v[1]+" fisika")}`;
 return `<article class="video-card"><div class="video-thumb"><span class="video-no">VIDEO ${v[0]}</span><span class="play">▶</span></div><div class="video-info"><span class="eyebrow">VEKTOR</span><h3>${v[1]}</h3><p>${v[2]}</p><a href="${url}" target="_blank" rel="noopener">▶ Tonton / Cari Video</a></div></article>`;
}).join("");

// QUIZ: 15 per chapter, generated from chapter-specific question templates
const quizBank={};
function q(text,opts,ans,exp){return {text,opts,ans,exp}}
quizBank.vector=[
q("Besaran yang memiliki besar dan arah disebut …",["skalar","vektor","satuan","dimensi"],1,"Vektor memiliki besar sekaligus arah."),
q("Jika A=(3,4), besar A adalah …",["3","4","5","7"],2,"|A|=√(3²+4²)=5."),
q("Komponen x dari vektor 10 N pada sudut 60° adalah …",["5 N","8,66 N","10 N","2,5 N"],0,"Ax=A cos 60°=5 N."),
q("Komponen y dari vektor 10 N pada sudut 60° adalah …",["5 N","8,66 N","10 N","6 N"],1,"Ay=A sin 60°≈8,66 N."),
q("Vektor nol memiliki besar …",["0","1","-1","tak hingga"],0,"Definisi vektor nol adalah magnitude 0."),
q("Jika A=(4,2) dan B=(1,3), A+B adalah …",["(5,5)","(3,-1)","(4,6)","(1,1)"],0,"Jumlahkan komponen sejenis."),
q("Jika A=(5,4) dan B=(2,1), A-B adalah …",["(7,5)","(3,3)","(2,3)","(3,5)"],1,"A-B=(5-2,4-1)."),
q("Arah vektor (3,3) terhadap +x adalah …",["30°","45°","60°","90°"],1,"tan θ=3/3 sehingga θ=45°."),
q("Perpindahan 3 m timur dan 4 m utara besarnya …",["7 m","1 m","5 m","12 m"],2,"√(3²+4²)=5 m."),
q("Dua vektor searah dengan besar 4 N dan 6 N menghasilkan …",["2 N","10 N","24 N","√52 N"],1,"Vektor searah dijumlahkan: 4+6=10 N."),
q("Dua vektor berlawanan arah 8 N dan 3 N menghasilkan besar resultan …",["11 N","5 N","24 N","0 N"],1,"Resultan = 8-3=5 N."),
q("Vektor satuan memiliki besar …",["0","1","2","bergantung arah"],1,"Vektor satuan didefinisikan bermagnitude 1."),
q("Jika Ax negatif dan Ay positif, vektor berada di kuadran …",["I","II","III","IV"],1,"x negatif dan y positif berarti kuadran II."),
q("R=(6,8) memiliki besar …",["10","14","2","48"],0,"√(36+64)=10."),
q("Fungsi menguraikan vektor menjadi komponen adalah …",["menghilangkan arah","mempermudah operasi vektor","mengubah satuan","menghilangkan besar"],1,"Komponen membuat operasi x dan y lebih mudah.")
];
function makeGeneric(id){
 const arr=[];
 const sets={
 kinematics:[
 ["Satuan SI untuk kecepatan adalah …",["m","m/s","m/s²","N"],1,"Kecepatan adalah perpindahan per waktu, satuannya m/s."],
 ["Jika v₀=2 m/s, a=3 m/s², t=4 s, v akhir …",["5","10","14","24"],2,"v=v₀+at=2+12=14 m/s."],
 ["Percepatan menyatakan perubahan …",["massa","posisi","kecepatan","gaya"],2,"Percepatan adalah perubahan kecepatan per waktu."],
 ["Grafik posisi-waktu dengan kemiringan tetap menunjukkan …",["percepatan tetap","kecepatan tetap","massa tetap","gaya nol"],1,"Kemiringan x-t adalah kecepatan."],
 ["Benda diam memiliki kecepatan …",["0","1","9,8","tak hingga"],0,"Diam berarti posisi tidak berubah terhadap waktu."],
 ["Jarak adalah besaran …",["vektor","skalar","tensor","arah"],1,"Jarak hanya memiliki nilai."],
 ["Perpindahan adalah besaran …",["skalar","vektor","satuan","massa"],1,"Perpindahan memiliki besar dan arah."],
 ["Jika a=0, gerak lurus dengan v tetap disebut …",["GLB","GLBB","jatuh bebas","parabola"],0,"GLB memiliki kecepatan konstan."],
 ["Pada jatuh bebas, percepatan mendekati …",["0","g","2g","1/g"],1,"Percepatan gravitasi g ke bawah."],
 ["Rumus perpindahan GLBB adalah …",["v/t","v₀t+½at²","ma","mgh"],1,"Itulah persamaan posisi untuk percepatan konstan."],
 ["Satuan percepatan adalah …",["m/s","m/s²","N","J"],1,"Perubahan kecepatan per waktu menghasilkan m/s²."],
 ["Jika v=20 m/s selama 5 s tanpa berubah, jarak …",["4 m","25 m","100 m","400 m"],2,"s=vt=20×5=100 m."],
 ["Arah kecepatan rata-rata mengikuti arah …",["jarak","perpindahan","massa","waktu"],1,"v rata-rata=perpindahan/waktu."],
 ["Benda dengan a negatif berarti …",["selalu diam","percepatan berlawanan arah positif yang dipilih","massa negatif","tidak bergerak"],1,"Tanda negatif mengikuti pilihan sumbu."],
 ["Grafik kecepatan-waktu, luas di bawah grafik menyatakan …",["massa","perpindahan","gaya","energi"],1,"Integral v terhadap t adalah perpindahan."]
 ],
 dynamics:[
 ["Hukum II Newton adalah …",["F=mv","ΣF=ma","P=F/A","W=Fs"],1,"Resultan gaya sama dengan massa kali percepatan."],
 ["Satuan gaya adalah …",["joule","pascal","newton","watt"],2,"1 N=1 kg·m/s²."],
 ["Berat benda dirumuskan …",["m/v","mg","ma","F/A"],1,"W=mg."],
 ["Jika resultan gaya nol, percepatan …",["maksimum","nol","negatif selalu","tak hingga"],1,"ΣF=ma, jadi a=0."],
 ["Gaya gesek arahnya …",["selalu searah gerak","melawan kecenderungan gerak","ke atas","ke bawah"],1,"Gesekan menentang gerak relatif."],
 ["Massa menunjukkan …",["kelembaman","warna","suhu","tekanan"],0,"Massa mengukur kelembaman."],
 ["Jika F=20 N dan m=5 kg, a=…",["2","4","10","100"],1,"a=F/m=4 m/s²."],
 ["Gaya normal pada bidang datar tanpa gaya vertikal lain sama dengan …",["0","mg","ma","v"],1,"Keseimbangan vertikal memberi N=mg."],
 ["Hukum I Newton disebut hukum …",["aksi-reaksi","inersia","energi","momentum"],1,"Hukum I adalah hukum kelembaman."],
 ["Hukum III Newton membahas …",["energi","aksi-reaksi","tekanan","kalor"],1,"Pasangan gaya aksi-reaksi."],
 ["Gaya 12 N ke kanan dan 5 N ke kiri menghasilkan …",["17 N kanan","7 N kanan","7 N kiri","60 N"],1,"Resultan=12-5=7 N kanan."],
 ["Jika massa diperbesar dengan gaya tetap, percepatan …",["bertambah","berkurang","tetap","menjadi nol"],1,"a=F/m."],
 ["Diagram semua gaya pada benda disebut …",["diagram energi","free body diagram","grafik x-t","vektor satuan"],1,"FBD memuat gaya yang bekerja pada benda."],
 ["Gesekan kinetik dapat dimodelkan …",["μkN","mv","mgh","f/t"],0,"fk=μkN."],
 ["Benda bergerak lurus dengan kecepatan tetap memiliki resultan gaya …",["nol","besar","negatif","tak tentu"],0,"Kecepatan tetap berarti a=0."]
 ],
 energy:[
 ["Satuan usaha adalah …",["N","J","Pa","W"],1,"Usaha diukur dalam joule."],
 ["Energi kinetik dirumuskan …",["mgh","½mv²","Fs","ma"],1,"Ek=½mv²."],
 ["Energi potensial gravitasi …",["mgh","mv","F/A","fλ"],0,"Ep=mgh."],
 ["Jika gaya tegak lurus perpindahan, usaha …",["maksimum","nol","negatif selalu","tak hingga"],1,"cos 90°=0."],
 ["Usaha positif berarti energi benda …",["cenderung bertambah","selalu nol","hilang seluruhnya","menjadi massa"],0,"Gaya memberi energi pada sistem."],
 ["Energi mekanik adalah jumlah …",["massa dan gaya","Ek dan Ep","tekanan dan suhu","momentum dan impuls"],1,"Em=Ek+Ep."],
 ["Benda 2 kg bergerak 3 m/s memiliki Ek …",["3 J","6 J","9 J","18 J"],2,"½×2×9=9 J."],
 ["Jika ketinggian dilipat 2, Ep menjadi …",["½","2 kali","4 kali","tetap"],1,"Ep sebanding dengan h."],
 ["Jika kecepatan dilipat 2, Ek menjadi …",["2 kali","4 kali","½","tetap"],1,"Ek sebanding v²."],
 ["Gaya 10 N memindahkan benda 5 m searah gaya. W=…",["2 J","15 J","50 J","100 J"],2,"W=Fs=50 J."],
 ["Daya adalah laju melakukan …",["massa","usaha","perpindahan","gaya"],1,"P=W/t."],
 ["Satuan daya adalah …",["watt","joule","newton","pascal"],0,"Watt adalah J/s."],
 ["Konservasi energi berarti energi …",["diciptakan tanpa batas","tidak dapat diciptakan/dimusnahkan, hanya berubah bentuk","selalu hilang","selalu kinetik"],1,"Prinsip kekekalan energi."],
 ["Pegas menyimpan …",["energi potensial elastis","energi nuklir","momentum","tekanan"],0,"Energi tersimpan karena deformasi elastis."],
 ["Roller coaster di titik tertinggi idealnya memiliki …",["Ek maksimum","Ep lebih besar","massa nol","kecepatan tak terbatas"],1,"Ketinggian tinggi berarti Ep besar."]
 ],
 momentum:[
 ["Momentum dirumuskan …",["mv","ma","Fs","mgh"],0,"p=mv."],
 ["Satuan momentum adalah …",["N","kg·m/s","J","Pa"],1,"Momentum = kg×m/s."],
 ["Impuls sama dengan …",["perubahan momentum","energi potensial","massa","tekanan"],0,"J=Δp."],
 ["Jika massa 2 kg dan v 5 m/s, p=…",["2","5","10","25"],2,"p=mv=10 kg·m/s."],
 ["Airbag membantu mengurangi gaya rata-rata dengan …",["memperpendek waktu tumbukan","memperpanjang waktu tumbukan","menambah massa","menghilangkan momentum"],1,"Untuk Δp sama, F rata-rata=Δp/Δt."],
 ["Momentum adalah besaran …",["skalar","vektor","tak berdimensi","suhu"],1,"Arah momentum mengikuti arah kecepatan."],
 ["Pada sistem terisolasi, momentum total …",["hilang","konstan","selalu nol","bertambah"],1,"Momentum total dikonservasikan."],
 ["Tumbukan tidak lenting sama sekali berarti benda …",["memantul sempurna","menyatu setelah tumbukan","menghilang","diam sebelum tumbukan"],1,"Benda bergerak bersama setelah tumbukan."],
 ["Impuls jika F=10 N selama 0,2 s adalah …",["0,2 Ns","2 Ns","10 Ns","50 Ns"],1,"J=FΔt=2 Ns."],
 ["Jika arah kecepatan berbalik, momentum …",["tetap arah","berubah arah","menjadi nol selalu","menjadi massa"],1,"Momentum mengikuti arah kecepatan."],
 ["Satuan impuls sama dengan …",["kg·m/s","kg","J/s","Pa"],0,"Impuls berdimensi momentum."],
 ["Bola dipukul dengan gaya besar dalam waktu singkat menghasilkan …",["impuls","massa nol","energi nol","tekanan nol"],0,"Impuls bergantung FΔt."],
 ["Roket menggunakan prinsip …",["konservasi momentum","Pascal","Archimedes","Bernoulli"],0,"Gas didorong ke belakang, roket memperoleh momentum berlawanan."],
 ["Jika v=0, momentum …",["maksimum","nol","negatif","tak hingga"],1,"p=mv=0."],
 ["Momentum total sebelum tumbukan 20 kg·m/s. Dalam sistem terisolasi sesudahnya …",["0","10","20","40"],2,"Kekekalan momentum."]
 ],
 waves:[
 ["Frekuensi adalah …",["waktu satu getaran","jumlah getaran per detik","jarak satu gelombang","tinggi gelombang"],1,"Frekuensi adalah banyak siklus per detik."],
 ["Hubungan periode dan frekuensi …",["f=T","f=1/T","f=T²","f=λ/T²"],1,"f=1/T."],
 ["Satuan frekuensi adalah …",["meter","hertz","newton","joule"],1,"Hz = s⁻¹."],
 ["Cepat rambat gelombang …",["v=fλ","v=m/a","v=Fs","v=mgh"],0,"Persamaan gelombang dasar."],
 ["Gelombang transversal bergetar …",["sejajar arah rambat","tegak lurus arah rambat","tanpa arah","hanya ke bawah"],1,"Contoh: gelombang pada tali."],
 ["Gelombang bunyi di udara termasuk …",["elektromagnetik","mekanik","cahaya","nuklir"],1,"Bunyi membutuhkan medium."],
 ["Gelombang elektromagnetik dapat merambat …",["hanya air","di ruang hampa","hanya padat","hanya udara"],1,"Tidak membutuhkan medium."],
 ["Jika T=0,2 s, f=…",["0,2 Hz","2 Hz","5 Hz","20 Hz"],2,"f=1/0,2=5 Hz."],
 ["Jika f=10 Hz dan λ=2 m, v=…",["5","12","20","100"],2,"v=10×2=20 m/s."],
 ["Amplitudo adalah …",["jarak maksimum dari keseimbangan","jumlah gelombang","waktu","cepat rambat"],0,"Amplitudo adalah simpangan maksimum."],
 ["Refleksi berarti gelombang …",["dibiaskan","dipantulkan","dihentikan","diserap seluruhnya"],1,"Refleksi adalah pemantulan."],
 ["Refraksi berarti …",["pemantulan","pembiasan","interferensi","polarisasi"],1,"Refraksi adalah pembiasan."],
 ["Interferensi terjadi karena …",["superposisi gelombang","massa","gravitasi","tekanan"],0,"Gelombang bertumpuk dan menghasilkan pola baru."],
 ["Panjang gelombang adalah jarak antara …",["dua titik sefase terdekat","sembarang titik","sumber dan medium","waktu"],0,"Misalnya puncak ke puncak berikutnya."],
 ["Jika frekuensi naik dan cepat rambat tetap, λ …",["naik","turun","tetap","nol"],1,"λ=v/f."]
 ],
 fluids:[
 ["Tekanan didefinisikan …",["F/A","mv","mgh","Fs"],0,"P=F/A."],
 ["Satuan tekanan SI …",["joule","pascal","newton","watt"],1,"Pa=N/m²."],
 ["Tekanan hidrostatik bertambah jika kedalaman …",["berkurang","bertambah","nol","tetap"],1,"P=ρgh."],
 ["Massa jenis adalah …",["m/V","V/m","F/A","mv"],0,"ρ=m/V."],
 ["Hukum Pascal berkaitan dengan …",["transmisi tekanan pada fluida tertutup","energi kinetik","gelombang","momentum"],0,"Tekanan diteruskan ke segala arah."],
 ["Gaya apung dijelaskan oleh …",["Archimedes","Newton I","Ohm","Hooke"],0,"Hukum Archimedes."],
 ["Jika ρ=1000, g=10, h=2, P hidrostatik …",["200 Pa","2000 Pa","20000 Pa","200000 Pa"],2,"P=1000×10×2=20000 Pa."],
 ["Dongkrak hidrolik memanfaatkan …",["Pascal","Archimedes","Bernoulli saja","inersia"],0,"Tekanan fluida diteruskan."],
 ["Benda terapung jika gaya apung …",["lebih kecil dari berat","sama dengan berat","nol","tak hingga"],1,"Pada keseimbangan terapung FA=W."],
 ["Persamaan kontinuitas ideal …",["A₁v₁=A₂v₂","F=ma","p=mv","W=Fs"],0,"Debit massa/volume terjaga dalam model aliran inkompresibel."],
 ["Pada pipa lebih sempit, kecepatan aliran ideal cenderung …",["lebih kecil","lebih besar","nol","tetap selalu"],1,"A mengecil → v membesar."],
 ["Tekanan pada kedalaman sama dalam fluida diam yang sama …",["sama","selalu nol","berbeda menurut bentuk wadah","tak tentu"],0,"Tekanan bergantung kedalaman, ρ, dan g."],
 ["Kapal dapat terapung karena …",["gaya apung","massa hilang","tekanan nol","gravitasi hilang"],0,"Volume air yang dipindahkan menghasilkan gaya apung."],
 ["Tekanan atmosfer bekerja karena …",["berat kolom udara","massa benda","energi kinetik benda","gaya pegas"],0,"Atmosfer memiliki berat."],
 ["Jika luas bidang diperbesar dengan gaya tetap, tekanan …",["bertambah","berkurang","tetap","tak hingga"],1,"P=F/A."]
 ]
 };
 return sets[id].map(x=>q(...x));
}
["kinematics","dynamics","energy","momentum","waves","fluids"].forEach(id=>quizBank[id]=makeGeneric(id));
let quizId="vector", quizIndex=0, answers={}, quizOrder=[], quizFinished=false;
const QUIZ_PASS=75;
function shuffleIndices(n){const a=Array.from({length:n},(_,i)=>i);for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function startQuiz(id){quizId=id;quizIndex=0;answers={};quizFinished=false;quizOrder=shuffleIndices(quizBank[id].length);document.getElementById('quizNext').disabled=false;document.querySelectorAll('.practice-tab').forEach(b=>b.classList.toggle('active',b.dataset.qtab===id));renderQuiz()}
function renderQuizTabs(){document.getElementById('practiceTabs').innerHTML=chapterOrder.map(id=>`<button class="practice-tab" data-qtab="${id}">${chapterMeta[id][0]} · ${chapterMeta[id][1]}</button>`).join('');document.querySelectorAll('.practice-tab').forEach(b=>b.onclick=()=>startQuiz(b.dataset.qtab))}
function renderQuiz(){
 const arr=quizBank[quizId],actual=quizOrder[quizIndex],item=arr[actual],chosen=answers[actual];
 document.getElementById('quizChapter').textContent=chapters[quizId].title;
 document.getElementById('quizProgress').textContent=`Soal ${quizIndex+1} dari ${arr.length} (acak)`;
 document.getElementById('quizProgressBar').style.width=`${((quizIndex+1)/arr.length)*100}%`;
 document.getElementById('quizQuestion').innerHTML=`<div class="question-box"><span class="qtag">PERTANYAAN ${quizIndex+1}</span><h3>${item.text}</h3></div>`;
 document.getElementById('quizOptions').innerHTML=item.opts.map((o,i)=>`<button class="quiz-option ${chosen===i?'selected':''}" data-opt="${i}" ${quizFinished?'disabled':''}>${String.fromCharCode(65+i)}. ${o}</button>`).join('');
 document.querySelectorAll('.quiz-option').forEach(b=>b.onclick=()=>{answers[actual]=+b.dataset.opt;renderQuiz()});
 document.getElementById('quizScore').textContent=quizFinished?Math.round(arr.reduce((n,q,i)=>n+(answers[i]===q.ans),0)/arr.length*100):'—';
 document.getElementById('quizPrev').disabled=quizIndex===0;
 document.getElementById('quizNext').textContent=quizIndex===arr.length-1?'Selesai & lihat hasil':'Berikutnya →';
 const box=document.getElementById('quizResult');box.classList.toggle('hidden',!quizFinished);
 if(quizFinished){const correct=arr.reduce((n,q,i)=>n+(answers[i]===q.ans),0),score=Math.round(correct/arr.length*100),passed=score>=QUIZ_PASS;
 box.innerHTML=`<h3>Skor akhir: ${score}/100</h3><p><strong>${passed?'LULUS':'REMEDIAL'}</strong> — ${passed?'Nilai memenuhi KKTP demo 75. Lanjutkan pengayaan dengan menguji konsep pada simulasi dan menjelaskan fenomenanya.':'Nilai belum mencapai KKTP demo 75. Tinjau kembali materi dan pembahasan, kemudian ikuti remedial minggu depan sesuai jadwal guru.'}</p><details><summary>Lihat pembahasan semua soal</summary>${quizOrder.map((k,i)=>`<p><b>${i+1}. ${arr[k].text}</b><br>${answers[k]===arr[k].ans?'Benar':'Perlu diperbaiki'} — ${arr[k].exp}</p>`).join('')}</details><button class="primary-btn" id="quizRestart">Ulangi latihan baru</button>`;
 document.getElementById('quizRestart').onclick=()=>startQuiz(quizId);
 }
}
document.getElementById('quizPrev').onclick=()=>{if(quizIndex>0){quizIndex--;renderQuiz()}};
document.getElementById('quizNext').onclick=()=>{if(quizFinished)return;if(quizIndex<quizOrder.length-1){quizIndex++;renderQuiz()}else{const unanswered=quizOrder.filter(k=>answers[k]===undefined).length;if(!confirm(`Perhatian! ${unanswered} soal belum dijawab. Yakin ingin mengakhiri asesmen dan melihat skor?`))return;quizFinished=true;renderQuiz()}};
renderQuizTabs();startQuiz('vector');
// keep MathJax updated when pages change
document.querySelectorAll(".nav-btn").forEach(b=>b.addEventListener("click",()=>{setTimeout(()=>{if(window.MathJax && typeof MathJax.typesetPromise === "function") MathJax.typesetPromise()},150)}));