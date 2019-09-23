import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

class Rules extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
        headerStyle: {
            backgroundColor: 'white',
        },
    });

    render() {
        return (
            <ScrollView style={styles.mainView}>
                <Text style={styles.titleText}>Kartlarin Dagitilmasi</Text>
                <Text>* Bir önceki oyunda oyunu söyleyen kişi kartları dağıtır. Dağıtan oyuncu desteyi karar. Sol tarafındaki oyuncuya kestirir. Sağ tarafından başlayarak (saatin dönüş yönünün tersinde kartları teker teker dağıtır.</Text>
                
                <Text style={styles.titleText}>Partiyi Başlatma</Text>
                <Text>* Gönüllü bir oyuncu kartları dağıtır.</Text>
                <Text>* Partide ilk oyuna 2♦ sahibi başlar.</Text>

                <Text style={styles.titleText}>Oynama</Text>
                <Text>* Koz oyununda 10 el alan oyuncu King yapmış sayılır ve oyun biter. Diğer oyunculardan o anda (+) puanda olanlar olsa bile King yapan oyuncu tek başına çıkmış sayılır ve bir önceki oyundaki puanlar geçerli sayılır. (Bazı versiyonlarda King yapacak oyuncunun oyundan önce King yapacağını beyan etmesi önkoşulu vardır. Bu durumda, eğer King yapacağını beyan eden oyuncu el sonunda King yapamazsa tek başına batmış kabul edilir ve oyun biter.)</Text>
                <Text>* Bir turdaki ceza kartlarının hepsi o tur bitmeden çıkmışsa o tur bitmiş sayılır ve yeni tura geçilir.</Text>    
            
                <Text style={styles.titleText}>Cezalar</Text>
                <Text>* Oyunun ceza elleri briçteki sanzatu kurallarına benzer.</Text>
                <Text>* Anlaşmaya göre Kız Almaz oynanan turda bütün oyuncular birer kız alırsa oyun iptal olur ve yeniden seçilir.</Text>
                <Text>* Sıra sahibi oyuncu Rıfkı oynamayı seçerse, başka bir oyuncu elinde sadece tek Rıfkı, tek kupa ası ve kupadan sadece rıfkı ve as gösterirse oyun iptal olur ve yeniden Rıfkı oyunu oynanır.</Text>
            
                <Text style={styles.titleText}>Koz</Text>
                <Text>* Yere koz düşmeden (çakılmadan) koz çekilmez.</Text>
                <Text>* Kozcunun elinde sıralı AKQ koz olması durumunda oyuna bu 3 kozu arka arkaya çekerek başlaması opsiyoneldir. Parti başlamadan bu durum kararlaştırılır.</Text>
                <Text>* Bir oyuncu koz çekiyorsa (ele koz atarak başladıysa yani yerdeki ilk kâğıt koz ise) yükseltmek zorunludur.</Text>
                <Text>* Bir oyuncu elinde yerdeki karttan mevcut değilse koz atar, yani çakar. Bir elde birden fazla oyuncu çakabilir. Çakarken koz yükseltmek mecburi değildir.</Text>
                <Text>* Koz oyunu seçilmişse oyunculardan herhangi birinde tüm renkleri kapsayacak şekilde 10'dan büyük kâğıt yoksa, o oyuncu eli başlamadan bozabilir. Eğer bu şekilde oyun bozulursa tekrar kâğıt dağıtılıp koz oynanır.</Text>
            
                <Text style={styles.titleText}>Puanlama</Text>
                <Text>* Ceza oyunlarında alınan puanlar negatif (-), koz oyunlarında alınan puanlar pozitif (+) olarak toplanır.</Text>
                <Text>* -10 ve daha düşük puanla bitirenler batmış kabul edilir. 0 ve daha yüksek puanla bitirenler çıkmış kabul edilir. (Bu durum oyunun başında anlaşmaya bağlıdır. Bazı oyunlarda çıkmak için +'ya geçmek zorunlu olduğundan 0 puan alan batmış kabul edilir)</Text>
                <Text>* Bir partideki Toplam Ceza ve Toplam Koz puanı birbirine eşittir. 5200 puandır, ancak cezaların dağılımı gereği -kız almaz cezalarının eşit dağılmaması da bunu destekler- en az 1, en çok 3 oyuncu oyunu kazanmaktadır.</Text>
                
                <Text style={styles.tableTitle}>Cezalar</Text>
                <View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableColName}>Adi</Text>
                        <Text style={styles.tableColPoint}>Puani</Text>
                        <Text style={styles.tableColSize}>Adet</Text>
                        <Text style={styles.tableColSum}>Toplam</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={styles.tableColName}>El Almaz</Text>
                        <Text style={styles.tableColPoint}>50</Text>
                        <Text style={styles.tableColSize}>13</Text>
                        <Text style={styles.tableColSum}>650</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={styles.tableColName}>Kupa Almaz</Text>
                        <Text style={styles.tableColPoint}>30</Text>
                        <Text style={styles.tableColSize}>13</Text>
                        <Text style={styles.tableColSum}>390</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={styles.tableColName}>Erkek Almaz</Text>
                        <Text style={styles.tableColPoint}>60</Text>
                        <Text style={styles.tableColSize}>8</Text>
                        <Text style={styles.tableColSum}>480</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={styles.tableColName}>Kiz Almaz</Text>
                        <Text style={styles.tableColPoint}>100</Text>
                        <Text style={styles.tableColSize}>4</Text>
                        <Text style={styles.tableColSum}>400</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={styles.tableColName}>Rifki</Text>
                        <Text style={styles.tableColPoint}>320</Text>
                        <Text style={styles.tableColSize}>1</Text>
                        <Text style={styles.tableColSum}>320</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={styles.tableColName}>Son Iki</Text>
                        <Text style={styles.tableColPoint}>180</Text>
                        <Text style={styles.tableColSize}>2</Text>
                        <Text style={styles.tableColSum}>360</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={styles.tableColLarge}>Toplam</Text>
                        <Text style={styles.tableColPoint}>2600</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={styles.tableColLarge}>Her ceza 2 kez oynanir</Text>
                        <Text style={styles.tableColPoint}>x2</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={styles.tableColLarge}>Parti Toplami</Text>
                        <Text style={styles.tableColPoint}>5200</Text>
                    </View>
                </View>

                <Text style={styles.tableTitle}>Kozlar</Text>
                <View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableColName}>Adi</Text>
                        <Text style={styles.tableColPoint}>Puani</Text>
                        <Text style={styles.tableColSize}>Adet</Text>
                        <Text style={styles.tableColSum}>Toplam</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={styles.tableColName}>Koz</Text>
                        <Text style={styles.tableColPoint}>50</Text>
                        <Text style={styles.tableColSize}>13</Text>
                        <Text style={styles.tableColSum}>650</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={styles.tableColLarge}>Partideki koz oyunu</Text>
                        <Text style={styles.tableColPoint}>x13</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={styles.tableColLarge}>Parti Toplami</Text>
                        <Text style={styles.tableColPoint}>5200</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    mainView: {
        margin: 10,
    },
    titleText: {
        fontWeight: 'bold',
        marginTop: 5,
    },
    tableTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15,
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableColName: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width: '35%',
    },
    tableColPoint: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width: '20%',
    },
    tableColSize: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width: '20%',
    },
    tableColSum: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width: '25%',
    },
    tableColLarge: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width: '75%',
    }

})

export default Rules;