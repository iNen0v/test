import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class EUCountriesPopulationScraper {
    public static void main(String[] args) {
        String url = "https://en.wikipedia.org/wiki/List_of_European_Union_member_states_by_population";
        try {
            // Fetching the webpage
            Document document = Jsoup.connect(url).get();

            // Extracting data from the table
            Element table = document.select("table.wikitable").first();
            Elements rows = table.select("tr");

            // Creating a dictionary to store country-population mapping
            Map<String, Integer> countriesDictionary = new HashMap<>();

            // Looping through rows and extracting country-population data
            for (Element row : rows) {
                Elements cols = row.select("td");
                if (cols.size() >= 2) {
                    String country = cols.get(0).text();
                    int population = Integer.parseInt(cols.get(1).text().replaceAll("[^0-9]", ""));
                    countriesDictionary.put(country, population);
                }
            }

            // Printing the dictionary
            System.out.println("countriesDictionary: " + countriesDictionary);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
