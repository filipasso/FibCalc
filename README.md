https://github.com/filipasso/FibCalc

https://hub.docker.com/repository/docker/filipasso/sprawozdanie1

# Sprawozdanie 1
# Krok 1 - obraz
Pierwszym krokiem było wykonanie pliku index.js, który ma za zadanie obliczać wartość poszczególnych elementów Ciągu Fibbonaciego. Program ten nie ma ograniczeń co do wielkości liczb jednak przy liczbach większych od 80 może występować rozbieżność z powodu wykorzystanego sposobu obliczeń.



Celem inicjalizacji nowego repozytorium wykonano następujące polecenia:

git init -b main

git add .
git commit -m "init"

gh repo create FibCalc --public --source=. --remote=FibCalc --push

# Krok 2 - Dockerfile
Zawartość pliku Dockerfile

![obraz](https://user-images.githubusercontent.com/60239006/210004964-6cb75ff7-0689-4cd5-b16e-215521deb48c.png)

Celem utworzenia obrazu wykonano następujące polecenie: docker build -t sprawozdanie1:v1

Aby uruchomić kontener w wersji interaktywnej wykonano następujące polecenie: docker run -i -a stdout -a stdin sprawozdanie1:v1

![obraz](https://user-images.githubusercontent.com/60239006/210004253-62c7a859-e436-4459-9347-6d319672d659.png)

#Krok 3 - Przygotowanie pliku fib.yml

Kolejnym etapem było przygotowanie pliku fib.yml, który będzie zgodny z wymaganą specyfikacją.

![obraz](https://user-images.githubusercontent.com/60239006/210005470-d9d64a27-fa2e-40d0-a1f9-82f379ff539a.png)


# Krok 4 - sprawdzenie działania

Celem sprawdzenia czy istnieją workflowy i status ich wykonania należy wykonać polecenie

gh workflow view

![obraz](https://user-images.githubusercontent.com/60239006/210006571-f14df9c3-afba-411d-8146-0702287bc143.png)

polcenie gh workflow list można sprawdzić statusy wykonanych workflowów

![obraz](https://user-images.githubusercontent.com/60239006/210006618-34915311-ca61-40df-825b-cb99e57697b1.png)


Zbudowane obrazy znajdują się na DockerHub

![obraz](https://user-images.githubusercontent.com/60239006/210006705-8f1dd5e9-465d-4a80-bc7e-f73747da0c83.png)

docker pull filipasso/sprawozdanie1:main

Zbudowane obrazy, które znajdują się na dhcr.io

![obraz](https://user-images.githubusercontent.com/60239006/210006872-3028344a-e9d4-457a-9509-2b2bdd19efab.png)

linux/amd64:

docker pull ghcr.io/filipasso/fibcalc:main@sha256:261e7112d4f73d1c678c671d451d0d1bc7d22a9b930e17e72331bb5a0a5ec004

linux/arm64:

docker pull ghcr.io/filipasso/fibcalc:main@sha256:333cdf6e1e6d9a408a2389e8361728432bc91b06ec1d16d97bd77956ac182df0

