import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

public class Solution01 {
	public static void main(String[] args) throws IOException {
		System.out.println(partOne());
		System.out.println(partTwo());
	}

	public static List<String> readInputFile() throws IOException {
		return Files.readAllLines(Path.of("input-01.txt"));
	}

	public static int partOne() throws IOException {
		List<Integer> expenses = new ArrayList<Integer>(
				readInputFile().stream().map(entry -> Integer.valueOf(entry)).toList());
		expenses.sort((a, b) -> a - b);
		int target = 2020;
		for (int i = 0; i < expenses.size() - 1; i++) {
			for (int j = i + 1; j < expenses.size(); j++) {
				int sum = expenses.get(i) + expenses.get(j);
				if (sum == target)
					return expenses.get(i) * expenses.get(j);
			}
		}
		return 0;
	}

	public static int partTwo() throws IOException {
		List<Integer> expenses = new ArrayList<Integer>(
				readInputFile().stream().map(entry -> Integer.valueOf(entry)).toList());
		expenses.sort((a, b) -> a - b);
		int target = 2020;
		for (int i = 0; i < expenses.size() - 2; i++) {
			for (int j = i + 1; j < expenses.size() - 1; j++) {
				for (int k = j + 1; k < expenses.size(); k++) {
					int sum = expenses.get(i) + expenses.get(j) + expenses.get(k);
					if (sum == target)
						return expenses.get(i) * expenses.get(j) * expenses.get(k);
				}
			}
		}
		return 0;
	}
}