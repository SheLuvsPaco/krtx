import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Lock, FileCheck } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Helmet>
        <title>Политика за защита на личните данни | KRTX</title>
        <meta name="description" content="Политика за защита на личните данни на KRTX. Научете как защитаваме вашата поверителност и обработваме личната информация." />
        <link rel="canonical" href="https://krtxgroup.com/privacy-policy" />
        <meta name="robots" content="noindex, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Политика за защита на личните данни",
              "description": "Политика за защита на личните данни на KRTX",
              "publisher": {
                "@type": "Organization",
                "name": "KRTX",
                "url": "https://krtxgroup.com"
              },
              "inLanguage": "bg-BG",
              "isPartOf": {
                "@type": "WebSite",
                "name": "KRTX",
                "url": "https://krtxgroup.com"
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navigation />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-800 z-0"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full filter blur-[128px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-300 rounded-full filter blur-[128px] translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/10 p-4 rounded-xl">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Политика за защита на личните данни</h1>
          </div>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl">
            Вашата поверителност е от първостепенно значение за нас. Научете как защитаваме и обработваме вашите лични данни.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-teal-50 p-3 rounded-lg w-fit mb-4">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Защита на данните</h3>
                <p className="text-gray-600">Използваме най-съвременни методи за защита на вашите лични данни</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-teal-50 p-3 rounded-lg w-fit mb-4">
                  <Lock className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Поверителност</h3>
                <p className="text-gray-600">Гарантираме поверителността на вашата лична информация</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-teal-50 p-3 rounded-lg w-fit mb-4">
                  <FileCheck className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Прозрачност</h3>
                <p className="text-gray-600">Пълна прозрачност относно обработката на вашите данни</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">I. ПРЕДМЕТ</h2>
              <p className="text-gray-600 mb-8">
                Настоящата Политика за защита на личните данни, наричана по-долу за краткост „Политика за защита на личните данни", представя информация за начина, по който „KRTX" ЕООД, наричано по-долу за краткост „Доставчик", „Администратор", „ние" и/или „нас", собственик/оператор на интернет страницата: https://krtx.com/, наричана по-долу за краткост „Интернет страница", обработва (включително, но не само събира и съхранява) лични данни на субекти на лични данни, като например ползвателите на Интернет страницата и на услугите на Доставчика, наричани по-долу за краткост „Ползвател/и", „Вие" и/или „Вас", както и относно правата на последните в тази връзка.
              </p>

              <h2 className="text-3xl font-bold mb-6">II. ИНФОРМАЦИЯ ОТНОСНО ДОСТАВЧИКА</h2>
              <ul className="list-disc pl-6 mb-8 text-gray-600">
                <li>Наименование: „KRTX" ЕООД, ЕИК: 207565488</li>
                <li>Седалище и адрес на управление: гр. Бургас, ж.к. Меден Рудник, ул. Черни връх № 10</li>
                <li>Тел. +359 895 652 375, електронна поща: office@krtx.com</li>
                <li>Вписване в публични регистри: Търговски регистър при Агенция по вписванията към Министерство на правосъдието на Република България.</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6">III. ИНФОРМАЦИЯ ОТНОСНО КОМПЕТЕНТНИЯ НАДЗОРЕН ОРГАН</h2>
              <ul className="list-disc pl-6 mb-8 text-gray-600">
                <li>Наименование: Комисия за защита на личните данни на Република България</li>
                <li>Адрес: гр. София 1592, бул. „Проф. Цветан Лазаров" № 2</li>
                <li>Телефон: 02 915 3 518</li>
                <li>Електронна поща: kzld@cpdp.bg</li>
                <li>Интернет страница: https://www.cpdp.bg/</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6">IV. ОСНОВАНИЕ ЗА СЪБИРАНЕ, ОБРАБОТВАНЕ И СЪХРАНЯВАНЕ НА ЛИЧНИ ДАННИ</h2>
              <p className="text-gray-600 mb-4">
                Ние обработваме (включително, но не само: събираме и съхраняваме) Ваши лични данни единствено във връзка със своята дейност и в съответствие с изискванията на приложимото законодателство, включително на Закона за защита на личните данни на Република България и на Общия регламент относно защитата на данните.
              </p>
              <p className="text-gray-600 mb-4">
                Ние обработваме лични Ви данни въз основа на поне едно от следните основания:
              </p>
              <ul className="list-disc pl-6 mb-8 text-gray-600">
                <li>Съгласие на Ползвателя за обработване на лични данни;</li>
                <li>Обработването на личните данни е необходимо за изпълнение на договорни задължения на Доставчика към Ползвателя;</li>
                <li>Обработването на личните данни е необходимо за предприемане на стъпки по искане на Ползвателя преди сключване на договор;</li>
                <li>Обработването на личните данни е необходимо за спазване на законови задължения на Доставчика;</li>
                <li>Обработването на личните данни е необходимо за целите на легитимните интереси на Доставчика за извършване на неговата дейност.</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6">V. ЦЕЛИ ЗА СЪБИРАНЕ, ОБРАБОТВАНЕ И СЪХРАНЯВАНЕ НА ЛИЧНИ ДАННИ</h2>
              <p className="text-gray-600 mb-4">
                Ние събираме, обработваме и съхраняваме лични данни на Ползвателите във връзка с осъществяване на предоставяните от нас услуги и на комуникация във връзка с използването на Интернет страницата, както и за следните цели:
              </p>
              <ul className="list-disc pl-6 mb-8 text-gray-600">
                <li>Комуникация и идентификация при изпълнение на договор за услуга и договор за покупко-продажба;</li>
                <li>Комуникация, идентификация, обработка и изпълнение на отправени запитвания;</li>
                <li>Изпълнение на данъчни и други законови задължения;</li>
                <li>Счетоводни цели във връзка с ползване на нашите услуги;</li>
                <li>Защита на легитимните ни интереси;</li>
                <li>Защита на информационната сигурност на Интернет страницата;</li>
                <li>Статистическа информация за ползването на Интернет страницата.</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6">VI. ПРИНЦИПИ НА СЪБИРАНЕ, ОБРАБОТВАНЕ И СЪХРАНЯВАНЕ НА ЛИЧНИ ДАННИ</h2>
              <p className="text-gray-600 mb-4">
                Ние спазваме следните принципи при събиране, обработване и съхраняване на личните Ви данни:
              </p>
              <ul className="list-disc pl-6 mb-8 text-gray-600">
                <li>законосъобразност, добросъвестност и прозрачност;</li>
                <li>ограничаване на целите на обработване;</li>
                <li>съответствие с целите на обработване;</li>
                <li>точност и актуалност на данните;</li>
                <li>ограничение на съхранението;</li>
                <li>цялостност и поверителност на обработването.</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6">VII. ЛИЧНИ ДАННИ</h2>
              <p className="text-gray-600 mb-4">
                Ние събираме следните категории лични данни на Ползвателите за следните цели и на следните основания:
              </p>
              <ul className="list-disc pl-6 mb-8 text-gray-600">
                <li>Ваши индивидуализиращи данни (име и фамилия, телефонен номер и имейл адрес);</li>
                <li>Информация свързана с плащане и избрани методи на плащане;</li>
                <li>Информация свързана с адрес за доставка;</li>
                <li>Вашият IP адрес, настройките на браузъра и предпочитания език;</li>
                <li>Други данни, които могат да бъдат необходими в определени случаи.</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6">VIII. СРОК НА СЪХРАНЯВАНЕ НА ЛИЧНИТЕ ДАННИ</h2>
              <p className="text-gray-600 mb-4">
                Ние съхраняваме личните данни на Ползвателите за срок не по-дълъг от необходимия за изпълнение на съответната цел на обработване или от законово установения срок.
              </p>
              <ul className="list-disc pl-6 mb-8 text-gray-600">
                <li>Лични данни от контактната форма - до една година;</li>
                <li>Данни свързани с договори - до десет години;</li>
                <li>Данни за издаване на фактури - до десет години;</li>
                <li>Данни на участници в процедури - до шест месеца.</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6">IX. ДОСТЪП ДО ЛИЧНИ ДАННИ И ПРЕДАВАНЕ НА ЛИЧНИ ДАННИ НА ТРЕТИ СТРАНИ</h2>
              <p className="text-gray-600 mb-4">
                По принцип, личните данни на Ползвателите, които обработваме, са достъпни за нашите служители, представители и партньори, които се нуждаят от тях за изпълнение на законови задължения и/или за изпълнение на договорни задължения.
              </p>
              <p className="text-gray-600 mb-8">
                Ние нямаме намерение да предаваме личните Ви данни в страни извън Европейската икономическа общност или на международни организации.
              </p>

              <h2 className="text-3xl font-bold mb-6">X. ПРАВА НА СУБЕКТИТЕ НА ДАННИ</h2>
              <p className="text-gray-600 mb-4">
                Във всеки момент, докато обработваме личните Ви данни, Вие имате следните права:
              </p>
              <ul className="list-disc pl-6 mb-8 text-gray-600">
                <li>Право на достъп до личните данни;</li>
                <li>Право на поправка/коригиране;</li>
                <li>Право на изтриване/да бъдете забравени;</li>
                <li>Право на ограничаване на обработката;</li>
                <li>Право на преносимост;</li>
                <li>Право на възражение;</li>
                <li>Право да оттеглите съгласието си за обработване.</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6">XI. ЖАЛБА ДО НАДЗОРЕН ОРГАН</h2>
              <p className="text-gray-600 mb-4">
                В случай че считате, че личните Ви данни не се обработват законосъобразно или че някое от правата Ви, свързани със защитата на лични данни, е нарушено, имате право да подадете жалба до компетентния надзорния орган за защита на личните данни, посочен в част III по-горе от Политиката за защита на личните данни. Също така имате право да търсите защита на правата си по съдебен ред.
              </p>
              <p className="text-gray-600 mb-4">
                В случай на наличие на Интернет страницата на препратки към други интернет страници, Ви препоръчваме да се запознаете внимателно с политиките за защита на лични данни/поверителност на тези други интернет страници, защото при посещение от Ваша страна на тези страници Ваши лични данни могат да бъдат обработвани от въпросните интернет страници, което обработване не е обхванато от Политиката за защита на лични данни.
              </p>
              <p className="text-gray-600">
                Запазваме правото си да променяме Политиката за защита на лични данни, по своя преценка, както и когато намерим за добре.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;