import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.*;

public class Solution06 {
	public static void main(String[] args) throws IOException {
		System.out.println(partOne());
		System.out.println(partTwo());
	}

	public static String readInputFile() throws IOException {
		return Files.readString(Path.of("input-06.txt"));
	}

	public static int partOne() throws IOException {
		int result = 0;
		for (String group : List.of(readInputFile().split("\\R{2,}"))) {
			Set<String> set = new HashSet<>(List.of(group.replaceAll("\n", "").split("")));
			result += set.size();
		}
		return result;
	}

	public static int partTwo() throws IOException {
		int result = 0;

		for (String group : readInputFile().split("\\R{2,}")) {
			String[] people = group.split("\\R");
			Map<Character, Integer> map = new HashMap<>();

			for (String person : people) {
				for (char c : person.toCharArray()) {
					map.put(c, map.getOrDefault(c, 0) + 1);
				}
			}

			for (int count : map.values()) {
				if (count == people.length) {
					result++;
				}
			}
		}

		return result;
	}
}