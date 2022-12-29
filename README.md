Sprawozdanie 1
# Krok 1
Pierwszym krokiem było wykonanie pliku index.js, który ma za zadanie obliczać wartość poszczególnych elementów Ciągu Fibbonaciego. Program ten nie ma ograniczeń co do wielkości liczb jednak przy liczbach większych od 80 może występować rozbieżność z powodu wykorzystanego sposobu obliczeń.

Celem utworzenia obrazu wykonano następujące polecenie: docker build -t sprawozdanie1:v1
Aby uruchomić kontener w wersji interaktywnej wykonano następujące polecenie: docker run -i -a stdout -a stdin sprawozdanie1:v1

![obraz](https://user-images.githubusercontent.com/60239006/210004253-62c7a859-e436-4459-9347-6d319672d659.png)

Celem inicjalizacji nowego repozytorium wykonano następujące polecenia:

git init -b main

git add .
git commit -m "init"

gh repo create FibCalc --public --source=. --remote=FibCalc --push

# Krok 2
